from tornado import ioloop, web, gen
from motor import MotorClient
import bcrypt
from forms import RegisterForm
from settings import DATABASE_SETTINGS, TORNADO_SETTINGS, PORT


class MainHandler(web.RequestHandler):
    def initialize(self, db):
        self.db = db


class IndexHandler(MainHandler):
    def initialize(self, db):
        self.data = {
            'form_errors': {},
            'user_exist': False,
        }
        super().initialize(db)

    def get(self):
        self.render('index.html', **self.data)

    @gen.coroutine
    def post(self):
        form = RegisterForm(self.request.arguments)
        if form.validate():
            user = yield self.db.users.find_one({'email': form.email.data})

            if not user:
                crypted_password = bcrypt.hashpw(form.username.data.encode(),
                                                 bcrypt.gensalt())
                user_data = {
                    'email': form.email.data,
                    'username': form.username.data,
                    'password': crypted_password,
                }
                yield self.db.users.insert(user_data)
                self.redirect('/success')
                return
            else:
                self.data['user_exist'] = True
        self.data['form_errors'] = form.errors
        self.render('index.html', **self.data)


class SuccessHandler(MainHandler):
    @gen.coroutine
    def get(self):
        users = yield self.db.users.find().to_list(length=10)
        self.render('success.html', users=users)


def create_app():
    client = MotorClient(DATABASE_SETTINGS['url'])
    db = client[DATABASE_SETTINGS['name']]

    return web.Application(
        [
            web.url(r'/', IndexHandler, {'db': db}, name='index'),
            web.url(r'/index', IndexHandler, {'db': db}),
            web.url(r'/success', SuccessHandler, {'db': db}),
        ],
        **TORNADO_SETTINGS)


if __name__ == "__main__":
    application = create_app()
    application.listen(PORT)
    print('app started at http://localhost:{}'.format(PORT))
    ioloop.IOLoop.instance().start()

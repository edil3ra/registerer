import os

DATABASE_SETTINGS = {
    'host': os.environ.get('MONGO_HOST') or 'localhost',
    'port': os.environ.get('MONGO_PORT') or 27017,
    'name': os.environ.get('MONGO_USERS_DATABASE_NAME') or 'registerer'
}

DATABASE_SETTINGS['url'] = 'mongodb://{}:{}/'.format(
    DATABASE_SETTINGS['host'], DATABASE_SETTINGS['port']),

TORNADO_SETTINGS = {
    "template_path": os.path.join(os.path.dirname(__file__), "templates"),
    "static_path": os.path.join(os.path.dirname(__file__), "../static"),
    "debug": os.environ.get('TORNADO_DEBUG') or True,
    "prod": os.environ.get('TORNADO_PROD') or False,
}

PORT = 8888

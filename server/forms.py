from wtforms.fields import StringField, PasswordField
from wtforms.validators import Required, Email, Length, EqualTo
from wtforms_tornado import Form


class RegisterForm(Form):
    username = StringField(validators=[Required(), Length(min=3, max=50)])
    email = StringField(validators=[Required(), Email(), Length(
        min=3, max=50)])
    password = PasswordField(validators=[Required(), Length(min=3, max=50)])
    password2 = PasswordField(validators=[Required(), Length(
        min=3, max=50), EqualTo(
            'password', message="The password enter are not the same")])

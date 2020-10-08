from Usuario.models import Usuario
from rest_framework import authentication
from rest_framework import exceptions


class Autenticacion(authentication.BaseAuthentication):

    def authenticate(self, request):
        email = request.META.get('email')
        password = request.META.get('password')
        if ((not email) and (not password)):
            return None

        try:
            Usuario = Usuario.objects.get(email=email, password=password)

        except exceptions.NotFound:
            raise exceptions.AuthenticationFailed('No such user')

        return (Usuario, None)

from Usuario.models import Usuario
from rest_framework import authentication
from rest_framework import exceptions


class Autenticacion(authentication.BaseAuthentication):

    def authenticate(self, request):
        username = request.META.get('X_USERNAME')
        if not username:
            return None

        try:
            Usuario = Usuario.objects.get(Usuarioname=username)
        except exceptions.NotFound:
            raise exceptions.AuthenticationFailed('No such user')

        return (Usuario, None)

from rest_framework import serializers
from .models import Usuario
from .models import UsuarioPelicula


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'nombre', 'email', 'create_at', 'password')


class UsuarioPeliculasSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioPelicula
        fields = ('id', 'pelicula', 'Usuario')

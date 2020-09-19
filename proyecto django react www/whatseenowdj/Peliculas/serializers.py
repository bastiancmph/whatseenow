from rest_framework import serializers
from .models import Peliculas


class PeliculasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Peliculas
        fields = ('id', 'nombre', 'genero', 'Calificacion',
                  'imagen', 'CortaDescripcion')

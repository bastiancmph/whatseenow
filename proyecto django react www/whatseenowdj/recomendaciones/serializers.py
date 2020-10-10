from rest_framework import serializers
from .models import Recomendaciones


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recomendaciones
        fields = ('id', 'name', 'imagen', 'genero', 'descripcion')

from django.db import models


class Recomendaciones(models.Model):
    name = models.CharField(max_length=100)
    imagen = models.CharField(max_length=9000)
    genero = models.CharField(max_length=300)
    descripcion = models.CharField(max_length=10000)

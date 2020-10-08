from django.db import models

# Create your models here.


class Peliculas(models.Model):
    nombre = models.CharField(max_length=200, unique=True)
    genero = models.CharField(max_length=50)
    Calificacion = models.CharField(max_length=300)
    imagen = models.CharField(max_length=4000, unique=True)
    CortaDescripcion = models.CharField(max_length=4000)
    created_at = models.DateTimeField(auto_now_add=True)

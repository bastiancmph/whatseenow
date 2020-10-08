from django.db import models


# Create your models here.


class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    create_at = models.DateTimeField(auto_now_add=True)
    password = models.CharField(max_length=50)


class UsuarioPelicula(models.Model):
    pelicula = models.CharField(max_length=1000)
    Usuario = models.CharField(max_length=1000)

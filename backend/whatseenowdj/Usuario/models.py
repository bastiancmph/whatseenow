from django.db import models

# Create your models here.

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    create_at = models.DateTimeField(auto_now_add= True)
    password = models.CharField(max_length= 50)
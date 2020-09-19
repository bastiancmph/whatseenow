from django.shortcuts import render
from .models import Peliculas
from .serializers import PeliculasSerializer
from rest_framework import generics


class PeliculasListCreate(generics.ListCreateAPIView):
    queryset = Peliculas.objects.all()
    serializer_class = PeliculasSerializer

# Create your views here.

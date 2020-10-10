from django.shortcuts import render
from .models import Peliculas
from .serializers import PeliculasSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import csv
from .admin import query_to_csv
from django.http import HttpResponse


class PeliculasListCreate(generics.ListCreateAPIView):
    queryset = Peliculas.objects.all()
    serializer_class = PeliculasSerializer


@api_view(['GET', 'POST'])
def PeliculasList(request):
    """
    List all code Peliculas , or create a new Pelicula.
    """
    if request.method == 'GET':
        peliculas = Peliculas.objects.all()
        query_to_csv(Peliculas.objects.all(),
                     filename='data.csv', user=1, group=1)
        serializer = PeliculasSerializer(peliculas, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PeliculasSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Create your views here.

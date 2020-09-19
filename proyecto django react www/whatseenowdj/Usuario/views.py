from django.shortcuts import render
from .models import Usuario
from .serializers import UsuarioSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


class UsuarioListCreate(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


@api_view(['GET', 'POST'])
def UsuarioList(request):
    """
    List all code Usuarios, or create a new Usuario.
    """
    if request.method == 'GET':
        usuarios = Usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        permission_classes = (Check_API_KEY_Auth,)

        def get(self, request, format=None):
            content = {
                'status': 'request was permitted'
            }
            return Response(content)

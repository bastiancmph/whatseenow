from .models import Recomendaciones
from .serializers import LeadSerializer
from rest_framework import generics


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Recomendaciones.objects.all()
    serializer_class = LeadSerializer

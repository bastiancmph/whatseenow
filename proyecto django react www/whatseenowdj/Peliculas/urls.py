from django.urls import path
from . import views

urlpatterns = [
    path('api/Peliculas/', views.PeliculasListCreate.as_view()),
]

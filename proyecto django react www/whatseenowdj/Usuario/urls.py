from django.urls import path
from . import views

urlpatterns = [
    path('api/Usuario/', views.UsuarioListCreate.as_view()),

]

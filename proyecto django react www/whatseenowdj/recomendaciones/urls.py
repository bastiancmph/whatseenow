from django.urls import path
from . import views

urlpatterns = [
    path('api/Recomendaciones/', views.LeadListCreate.as_view()),
]

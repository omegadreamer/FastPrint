from django.urls import path
from . import views

urlpatterns = [
    path("home", views.home, name="home"),
    path("practice", views.practice, name="practice"),
]

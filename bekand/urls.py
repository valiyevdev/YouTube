from django.urls import path
from .views import *
from . import views


urlpatterns = [
    path('', home, name='index'),
    path('channel/', channel, name='channel'),
]
# users/urls.py

from django.urls import include, path
from .views import dashboard, register, home

urlpatterns = [
    path("", home, name="home"),
    path("accounts/", include("django.contrib.auth.urls")),
    path("dashboard/", dashboard, name="dashboard"),
    path("register/", register, name="register"),
]

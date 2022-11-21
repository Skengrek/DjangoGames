# mysite/urls.py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("", include("Users.urls")),
    path("chat/", include("Chat.urls")),
    path("admin/", admin.site.urls),
]

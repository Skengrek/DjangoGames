# mysite/urls.py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("chat/", include("Chat.urls")),
    path("user/", include("Users.urls")),
    path("admin/", admin.site.urls),
]

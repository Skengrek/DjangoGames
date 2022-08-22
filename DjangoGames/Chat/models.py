from tabnanny import verbose
from django.db import models


class message(models.Model):
    text = models.TextField(verbose_name="message")

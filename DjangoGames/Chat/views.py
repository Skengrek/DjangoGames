from django.shortcuts import render


def chatlobby(request):
    return render(request, "chat/chat.html")

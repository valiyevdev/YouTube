from django.shortcuts import render


def home(request):
    return render(request, 'homepage.html')

def channel(request):
    return render(request, 'channel.html')
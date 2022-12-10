from django.shortcuts import render
from .models import Tag,Post,Comment
# Create your views here.

def index(request):
    return render(request,"blog/index.html")
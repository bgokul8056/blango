from django.shortcuts import render
from blog.models import Post
from django.utils import timezone
# Create your views here.

def index(request):
    posts = Post.objects.filter(published_at__lte=timezone.now())
    context = {"posts":posts}
    return render(request, "blog/index.html", context)

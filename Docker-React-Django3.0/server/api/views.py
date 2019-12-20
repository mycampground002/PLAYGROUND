from django.http import HttpResponse
from django.shortcuts import render

from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.decorators import api_view

from .models import Post
from .serializers import PostSerializer
# Create your views here.

def hello_world(request):
  return HttpResponse('WORKING')

class ListCreateView(ListCreateAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer

class DetailPatchRemoveView(RetrieveUpdateDestroyAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer
  lookup_field = 'slug'
  


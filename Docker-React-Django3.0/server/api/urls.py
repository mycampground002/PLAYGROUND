from django.urls import path
from . import views

urlpatterns = [
  path('hello/',views.hello_world), # test
  path('', views.ListCreateView.as_view()),
  path('edit/<slug>', views.DetailPatchRemoveView.as_view()),
]
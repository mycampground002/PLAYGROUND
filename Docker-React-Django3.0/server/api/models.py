from django.db import models
from django.dispatch import receiver
from django.utils.text import slugify
from django.db.models.signals import post_delete, pre_save

# Create your models here.
class Post(models.Model):
  title = models.CharField(max_length=15, unique=True)
  content = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  completed = models.BooleanField(default=False)
  slug = models.SlugField(unique=True, blank=True)

@receiver(pre_save, sender=Post)
def pre_save_post_receiver(sender, instance, *args, **kwargs):
  instance.slug = slugify(instance.title)
pre_save.connect(pre_save_post_receiver, sender=Post)
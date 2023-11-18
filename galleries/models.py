from django.db import models
from django.contrib.auth.models import User


class Gallery(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=500)
    image = models.ImageField(
        upload_to='images/', default='../default_post_f8mypf', blank=True
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Like(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    gallery = models.ForeignKey(
        Gallery, on_delete=models.CASCADE, related_name='likes'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'gallery']

    def __str__(self):
        return f'{self.owner} liked {self.gallery}'

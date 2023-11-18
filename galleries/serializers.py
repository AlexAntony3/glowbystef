from rest_framework import serializers
from .models import Gallery, Like


class GallerySerializer(serializers.ModelSerializer):

    class Meta:
        model = Gallery
        fields = [
            'id' ,'owner', 'created_at', 'description',
            'image', 'title', 
        ]


class LikeSerializer(serializers.ModelSerializer):

    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Like
        fields = [
            'id', 'owner', 'created_at', 'gallery',
        ]

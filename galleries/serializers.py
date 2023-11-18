from django.db import IntegrityError
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

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'potential duplicate'
            })

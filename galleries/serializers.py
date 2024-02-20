from django.db import IntegrityError
from rest_framework import serializers
from .models import Gallery, Like


class GallerySerializer(serializers.ModelSerializer):
    """
    Serializer that allows a user to like the gallery post.
    """
    like_id = serializers.SerializerMethodField()
    likes_count = serializers.ReadOnlyField()

    class Meta:
        model = Gallery
        fields = [
            'id' , 'created_at', 'description',
            'image', 'title', 'like_id', 'likes_count'
        ]
        optional_fields = ['owner']

    def get_like_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            like = Like.objects.filter(
                owner=user, gallery=obj
            ).first()
            return like.id if like else None
        return None


class LikeSerializer(serializers.ModelSerializer):
    """
    Serializer that allows the creation of a like
    """

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

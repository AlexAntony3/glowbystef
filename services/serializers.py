from rest_framework import serializers
from .models import Service, Review


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = [
            'id', 'name', 'description', 'price', 'image',
        ]


class ReviewSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(
        source='owner.profile.id'
    )
    profile_image = serializers.ReadOnlyField(
        source='owner.profile.profile_picture.url'
    )

    def validate_review(self, value):
        max_length = 800

        if len(value) > max_length:
            raise serializers.ValidationError(
                'The review can only have a maximum of 800 characters.'
            )
        
        return value

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Review
        fields = [
            'id', 'owner', 'service', 'review', 'rating', 'created_at',
            'is_owner', 'profile_id', 'profile_image', 'rating_filter'
        ]

class ReviewDetailSerializer(ReviewSerializer):
    service = serializers.ReadOnlyField(source='review.id')
from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework import serializers
from .models import Service, Review


class ServiceSerializer(serializers.ModelSerializer):
    """
    A serializer that allows a user to associate a review to the relevant
    service.
    """
    review_id = serializers.SerializerMethodField()
    reviews_count = serializers.ReadOnlyField()

    class Meta:
        model = Service
        fields = [
            'id', 'name', 'description', 'price', 'image',
            'review_id', 'reviews_count'
        ]
    
    def get_review_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            review = Review.objects.filter(
                owner=user, service=obj
            ).first()
            return review.id if review else None
        return None




class ReviewSerializer(serializers.ModelSerializer):
    """
    serializer for the reviews 
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(
        source='owner.profile.id'
    )
    profile_image = serializers.ReadOnlyField(
        source='owner.profile.profile_picture.url'
    )
    created_at = serializers.SerializerMethodField()

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

    def get_created_at(self, obj):
        return naturaltime(obj.created_at)

    class Meta:
        model = Review
        fields = [
            'id', 'owner', 'service', 'review', 'rating', 'created_at',
            'is_owner', 'profile_id', 'profile_image', 'rating_filter',
        ]

class ReviewDetailSerializer(ReviewSerializer):
    service = serializers.ReadOnlyField(source='review.id')
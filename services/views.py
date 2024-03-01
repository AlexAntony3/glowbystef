from django.db.models import Count
from rest_framework import permissions, generics, filters
from .models import Service, Review
from gbs_api.permissions import IsOwnerOrReadOnly
from .serializers import (
    ServiceSerializer,
    ReviewSerializer,
    ReviewDetailSerializer
)


class ServiceList(generics.ListCreateAPIView):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = ServiceSerializer
    queryset = Service.objects.annotate(
        reviews_count=Count('reviews', distinct=True)
    )
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
    ]
    search_fields = [
        'name',
    ]
    ordering_fields = [
        'reviews_count',
    ]


def perform_create(self, serializer):
    serializer.save()


class ServiceDetail(generics.RetrieveDestroyAPIView):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()


class ReviewList(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Review.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ReviewDetailSerializer
    queryset = Review.objects.all()

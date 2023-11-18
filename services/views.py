from rest_framework import status, permissions, generics
from .models import Service, Review
from .serializers import ServiceSerializer, ReviewSerializer, ReviewDetailSerializer
from gbs_api.permissions import IsOwnerOrReadOnly


class ServiceList(generics.ListCreateAPIView):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()

    def perform_create(self, serializer):
        serializer.save()


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

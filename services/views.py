from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Service, Review
from .serializers import ServiceSerializer, ReviewSerializer


class ServiceList(APIView):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = ServiceSerializer

    def get(self, request):
        services = Service.objects.all()
        serializer = ServiceSerializer(
            services, many=True, context={'request': request}
        )
        return Response(serializer.data)

    def post(self, request):
        serializer = ServiceSerializer(
            data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data, status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )


class ReviewList(APIView):
    def get(self, request):
        reviews = Review.objects.all()
        serializer = ReviewSerializer(
            reviews, many=True, context={'request': request}
        )
        return Response(serializer.data)

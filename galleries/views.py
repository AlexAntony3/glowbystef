from rest_framework import permissions, generics
from gbs_api.permissions import IsOwnerOrReadOnly
from .models import Gallery, Like
from .serializers import GallerySerializer, LikeSerializer


class GalleryList(generics.ListCreateAPIView):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    
class LikeList(generics.ListCreateAPIView):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()


class likeDetail(generics.RetrieveDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = LikeSerializer
    queryset = Like.objects.all()
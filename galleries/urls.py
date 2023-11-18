from django.urls import path
from galleries import views

urlpatterns = [
    path('galleries/', views.GalleryList.as_view()),
    path('galleries/likes/', views.LikeList.as_view())
]

from django.urls import path
from galleries import views

urlpatterns = [
    path('galleries/', views.GalleryList.as_view()),
    path('galleries/<int:pk>/', views.GalleryDetail.as_view()),
    path('likes/', views.LikeList.as_view()),
    path('likes/<int:pk>/', views.LikeDetail.as_view())
]

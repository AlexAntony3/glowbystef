from django.urls import path
from services import views

urlpatterns = [
    path('services/', views.ServiceList.as_view()),
    path('services/reviews/', views.ReviewList.as_view()),
    path('services/reviews/<int:pk>/', views.ReviewDetail.as_view()),
]

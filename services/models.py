from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User



class Service(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to="images/", default='../blank_services_picture_lc3p4z')

    def __str__(self):
        return self.name


class Review(models.Model):
    RATING_FILTER_CHOICES = [
        (1, 'one star'),
        (2, 'two stars'),
        (3, 'three stars'),
        (4, 'four stars'),
        (5, 'five stars')
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='reviews')
    review = models.TextField()
    rating = models.IntegerField(
        default=1,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ]
    )
    created_at = models.DateTimeField(auto_now_add=True)
    rating_filter = models.IntegerField(
        choices=RATING_FILTER_CHOICES,
        null=True,
        blank=True,
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.owner}'s review on {self.service.name}"

from django.db import models


# Create your models here.
class User(models.Model):

    ROLE_CHOICES = {
        'USER': 'User',
        'PROBLEM_SETTER': 'Problem Setter',
        'ADMIN': 'Admin'
    }
    username = models.CharField(null=False, unique=True, max_length=255)
    first_name = models.CharField(null=True, max_length=255)
    last_name = models.CharField(null=True, max_length=255)
    email = models.EmailField(null=False, unique=True)
    password = models.CharField(null=False, max_length=255)
    role_name = models.CharField(null=False, choices=ROLE_CHOICES, default='USER', max_length=14)

    class Meta:
        db_table = "user"

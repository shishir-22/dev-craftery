from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from problem import views

router = routers.DefaultRouter()
router.register(r'problems', views.ProblemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('submit-code/', views.CodeSubmissionAPIView.as_view(), name='submit_code'),
    path('admin/', admin.site.urls)
]

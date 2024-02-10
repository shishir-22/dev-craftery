from django.db import models
# from django.db.models import SET_DEFAULT
import sys
sys.path.append("..")
# from ..users import models as user_models


# Create your models here.
class Problem(models.Model):
    DIFFICULTY_CHOICES = {
        'EASY': 'Easy',
        'MEDIUM': 'Medium',
        'HARD': 'Hard'
    }
    title = models.CharField(unique=True, max_length=50)
    description = models.JSONField(null=False)
    difficulty = models.CharField(null=False, choices=DIFFICULTY_CHOICES)
    created_by = models.CharField(null=False, max_length=255)
    created_on = models.DateTimeField(auto_created=True)

    class Meta:
        db_table = "problem"
    @property
    def tag_details(self):
        return self.problemtagdetails_set.all()


class ProblemTagDetails(models.Model):
    problem_id = models.ForeignKey(Problem, on_delete=models.CASCADE, null=False)
    tag_name = models.CharField(null=False)

    class Meta:
        db_table = "problem_tag_details"

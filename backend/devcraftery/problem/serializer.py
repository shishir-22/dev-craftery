from abc import ABC

from rest_framework import serializers

from problem.models import Problem, ProblemTagDetails


class ProblemTagDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProblemTagDetails
        fields = ['tag_name']


class ProblemSerializer(serializers.ModelSerializer):
    tag_details = ProblemTagDetailsSerializer(many=True)

    class Meta:
        model = Problem
        fields = ['id', 'title', 'description', 'difficulty', 'created_by', 'created_on', 'tag_details']

    def create(self, validated_data):
        tag_details = validated_data.pop('tag_details')
        problem = Problem.objects.create(**validated_data)
        for tag_detail in tag_details:
            ProblemTagDetails.objects.create(**tag_detail, problem_id=problem)
        return problem


class SubmitSerializer(serializers.Serializer, ABC):
    language = serializers.CharField(max_length=100)
    code = serializers.CharField()

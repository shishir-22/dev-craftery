from rest_framework import permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from problem.models import Problem
from problem.serializer import ProblemSerializer, SubmitSerializer


class ProblemViewSet(viewsets.ModelViewSet):
    queryset = Problem.objects.all().order_by('id')
    serializer_class = ProblemSerializer
    permission_classes = [permissions.AllowAny]


class CodeSubmissionAPIView(APIView):
    def post(self, request, *args, **kwargs):
        # Deserialize the request data using the serializer
        serializer = SubmitSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Extract the code from the deserialized data
        code = serializer.validated_data['code']
        print(code)

        # Perform any necessary validation on the code

        # Execute the code (optional)

        # Return a response
        return Response({'message': 'Code submitted successfully'}, status=status.HTTP_200_OK)

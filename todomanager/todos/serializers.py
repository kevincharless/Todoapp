from rest_framework import serializers
from todos.models import Todo

# Todo serializer
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
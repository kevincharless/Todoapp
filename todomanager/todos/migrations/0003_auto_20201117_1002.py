# Generated by Django 3.1.1 on 2020-11-17 03:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0002_todo_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='email',
        ),
        migrations.RemoveField(
            model_name='todo',
            name='message',
        ),
        migrations.RemoveField(
            model_name='todo',
            name='name',
        ),
        migrations.AddField(
            model_name='todo',
            name='completed',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AddField(
            model_name='todo',
            name='title',
            field=models.CharField(max_length=200, null=True),
        ),
    ]

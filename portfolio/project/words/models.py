from django.db import models

class PickedWord(models.Model):
    word = models.CharField(max_length=100)
    def __str__(self):
        return self.word

class PickedDefinition(models.Model):
    definition = models.TextField()

    def __str__(self):
        return self.definition

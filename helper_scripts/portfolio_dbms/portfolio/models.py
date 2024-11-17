from django.db import models

class Games(models.Model):
    STATUS_CHOICES = [
        ('playing', 'Playing'),
        ('finished', 'Finished'),
    ]

    title = models.CharField(max_length=255)
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        null=True,
        blank=True,
        default=None
    )
    review = models.TextField(blank=True, null=True, default=None)
    recommendation = models.IntegerField(
        blank=True,
        null=True,
        default=None,
        choices=[(i, str(i)) for i in range(1, 6)]
    )
    studio = models.CharField(max_length=255, null=True, blank=True)
    genre = models.JSONField(default=list)
    included = models.BooleanField(default=True)


    def get_display_rating(self):
        return "⭐"*self.recommendation if self.recommendation else ""
    get_display_rating.short_description = "Rating"

    def __str__(self):
        return f"{self.title} - {self.studio}"

    class Meta:
        db_table = 'games'


class Resources(models.Model):
    title = models.CharField(max_length=255)
    provider = models.TextField()
    recommendation = models.IntegerField(blank=True, null=True)
    review = models.TextField(
        blank=True,
        null=True,
        default=None,
        choices=[(i, str(i)) for i in range(1, 6)]
    )
    link = models.TextField(null=True,blank=True)
    topics = models.JSONField(default=list)
    included = models.BooleanField(default=True)

    def get_display_rating(self):
        return "⭐"*self.recommendation if self.recommendation else ""
    get_display_rating.short_description = "Rating"

    def __str__(self):
        return f"{self.title} - {self.provider}"
    
    class Meta:
        db_table = 'resources'
from django.db import models
from datetime import datetime

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
    recommendation = models.IntegerField(
        blank=True, 
        null=True,
        choices=[(i, str(i)) for i in range(1, 6)]
    )
    review = models.TextField(
        blank=True,
        null=True,
        default=None
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

class Blog(models.Model):
    MONTHS = (
        ('jan', 'jan'),
        ('feb', 'feb'),
        ('mar', 'mar'),
        ('apr', 'apr'),
        ('may', 'may'),
        ('jun', 'jun'),
        ('jul', 'jul'),
        ('aug', 'aug'),
        ('sep', 'sep'),
        ('oct', 'oct'),
        ('nov', 'nov'),
        ('dec', 'dec'),
    )

    title = models.CharField(max_length=255)
    description = models.TextField()

    def get_current_month():
        return datetime.now().strftime('%b').lower() 

    def get_current_year():
        return str(datetime.now().year) 
    
    publish_date_month = models.CharField(max_length=3, choices=MONTHS, default=get_current_month)
    publish_date_year = models.CharField(max_length=5, default=get_current_year)
    medium_url = models.TextField(default='#')
    hashnode_url = models.TextField(default='#')
    thumbnail_url = models.TextField(default='#')
    tags = models.JSONField(default=list)
    included = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title}"
    
    @property
    def get_publish_date(self):
        return f"{self.publish_date_month.capitalize()} {self.publish_date_year} "
    
    class Meta:
        db_table = 'blog'

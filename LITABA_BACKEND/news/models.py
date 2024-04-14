from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=30)

    class Meta:
        verbose_name_plural = "catagories"
        
    def __str__(self):
        return self.name

#  FIXME: Add User class in accounts to make author work 
class Article(models.Model):
    # author = models.ForeignKey(User, on_delete=models.CASCADE)
    headline = models.BooleanField(default=False)
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField("Category", related_name="articles")

    class Meta:
        ordering = ['-created_at']
        
    def __str__(self):
        return self.title


class Comment(models.Model):
    author = models.CharField(max_length=60)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    article = models.ForeignKey("Article", on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.author} on '{self.post}'"
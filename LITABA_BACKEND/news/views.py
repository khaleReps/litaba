from rest_framework import generics, status
from rest_framework.response import Response
from .models import Article, Category, Comment
from .serializers import ArticleSerializer, CategorySerializer, CommentSerializer


class ArticleListCreate(generics.ListCreateAPIView):
    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = ArticleSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class CategoryArticleList(generics.ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        category_name = self.kwargs['category']
        try:
            category = Category.objects.get(name=category_name)
            return Article.objects.filter(categories=category)
        except Category.DoesNotExist:
            return Article.objects.none()

class CommentListCreate(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
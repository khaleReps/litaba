from django.urls import path
from .views import ArticleListCreate, CategoryList, CommentListCreate, CategoryArticleList

url_name = 'news'

urlpatterns = [
    path('', ArticleListCreate.as_view(), name='home'), 
    path('news', ArticleListCreate.as_view(), name='news'),
    path('articles/', ArticleListCreate.as_view(), name='article-list'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('comments/', CommentListCreate.as_view(), name='comment-list'),
    path('categories/<str:category>/', CategoryArticleList.as_view(), name='category-article-list'),
]

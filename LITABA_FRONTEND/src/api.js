import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Fetch all articles
export const getArticles = () => {
  return api.get('articles/');
};

// Fetch articles by category
export const getArticlesByCategory = (category) => {
  return api.get(`categories/${category}/`);
};

// Fetch all headlines
export const getHeadlines = () => {
  return api.get('headlines/');
};

// Create a new comment
export const createComment = (commentData) => {
  return api.post('comments/', commentData);
};

export default api;

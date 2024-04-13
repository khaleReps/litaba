import React, { useEffect, useState } from 'react';
import { getArticles } from '../api';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;

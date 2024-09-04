import React from 'react';
import './style/NewsItem.css'

const NewsItem = ({ article, addBookmark }) => {
  return (
    <div className="news-item">
      <div className="news-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </div>
      <button className="bookmark-button" onClick={() => addBookmark(article)}>
        📌
      </button>
    </div>
  );
};

export default NewsItem;


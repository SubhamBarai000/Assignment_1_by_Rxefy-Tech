import React from 'react';
import NewsItem from './NewsItem';
import './style/NewsList.css'

const NewsList = ({ articles, addBookmark }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} addBookmark={addBookmark} />
      ))}
    </div>
  );
};

export default NewsList;

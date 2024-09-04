import React from 'react';
import './style/Bookmark.css'

const Bookmark = ({ bookmarks }) => {
  return (
    <div>
      <h2>Bookmarked Articles</h2>
      {bookmarks.map((bookmark, index) => (
        <div key={index}>
          <h3>{bookmark.title}</h3>
          <p>{bookmark.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookmark;

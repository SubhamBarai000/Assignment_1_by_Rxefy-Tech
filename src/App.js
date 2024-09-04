import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import Bookmark from './components/Bookmark';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('health');
  const [bookmarks, setBookmarks] = useState([]);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     //const API_KEY = 'd3872a7c0f9c4cb29755996a13d46f9a';
  //     //const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`;
  //     // const url = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d3872a7c0f9c4cb29755996a13d46f9a`;
  //     const url = `https://newsdata.io/api/1/news?apikey=pub_52651a514fb32c893d5f63afd7febf2a4f45a&q=health-related`;
  //     const response = await axios.get(url);
  //     setArticles(response.data.articles);
  //   };
  useEffect(() => {
    const fetchNews = async () => {
      const API_KEY = 'pub_52651a514fb32c893d5f63afd7febf2a4f45a';
      const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=health-related&category=${category}`;
      const response = await axios.get(url);
      setArticles(response.data.results);
    };

    fetchNews();
  }, [category]);

  const addBookmark = (article) => {
    setBookmarks([...bookmarks, article]);
  };

  return (
    <Router>
      <div className="container">
        <Navbar setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<NewsList articles={articles} addBookmark={addBookmark} />} />
          <Route path="/bookmarks" element={<Bookmark bookmarks={bookmarks} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import { fetchBooks } from './redux/books/books';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<BooksPage />} />
          <Route exact path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

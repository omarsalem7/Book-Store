import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
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
}

export default App;

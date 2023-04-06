import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from './components/BookList';
import Categories from './components/Categories';
import NavBar from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<BookList/> } />
      <Route path="/categories" element={<Categories/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

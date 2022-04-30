import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookPage from "./pages/bookPage";
import CategoryPage from "./pages/categoryPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BookPage />} />
      <Route path="/category" element={<CategoryPage />} />
    </Routes>
  </Router>
);

export default App;

/* eslint-disable import/extensions */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./components/Book";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;

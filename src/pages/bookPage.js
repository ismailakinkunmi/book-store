import React from "react";
import Form from "../components/form";

import Header from "../components/header";

const bookPage = () => (
  <main>
    <Header />
    <div className="card-container">
      <p className="book-category">Action</p>
      <h3>The Hunger Games</h3>
      <p>Suzanne Collins</p>
      <p>Comments</p>
      <span />
      <p>Remove</p>
      <span />
      <p>Edit</p>
      <span />
      <div className="progress-circle">
        <span>64%</span>
        <p>Completed</p>
      </div>
      <hr />
      <p>CURRENT CHAPTER</p>
      <p>Chapter 17</p>
      <button type="submit">UPDATE PROGRESS</button>
    </div>
    <div className="card-container">
      <p className="book-category">Science Fiction</p>
      <h3>Dune</h3>
      <p>Frank Herbert</p>
      <p>Comments</p>
      <span />
      <p>Remove</p>
      <span />
      <p>Edit</p>
      <span />
      <div className="progress-circle">
        <span>8%</span>
        <p>Completed</p>
      </div>
      <hr />
      <p>CURRENT CHAPTER</p>
      <p>Chapter 3: A Lesson Learned</p>
      <button type="submit">UPDATE PROGRESS</button>
    </div>
    <div className="card-container">
      <p className="book-category">Action</p>
      <h3>Capital in the Twenty-First Century</h3>
      <p>Suzanne Collins</p>
      <p>Comments</p>
      <span />
      <p>Remove</p>
      <span />
      <p>Edit</p>
      <span />
      <div className="progress-circle">
        <span>0%</span>
        <p>Completed</p>
      </div>
      <hr />
      <p>CURRENT CHAPTER</p>
      <p>Introduction</p>
      <button type="submit">UPDATE PROGRESS</button>
    </div>
    <Form />
  </main>
);

export default bookPage;

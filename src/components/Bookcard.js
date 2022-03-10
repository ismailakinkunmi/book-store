import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBook } from "../redux/books/books";

export default function bookcard() {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      {bookStore.map(({ id, author, title }) => (
        <div key={id} className="card-container">
          <p className="book-category">Science Fiction</p>
          <h3>{title}</h3>
          <p>{author}</p>
          <p>Comments</p>
          <span />
          <button type="button" onClick={() => handleRemove(id)}>
            Delete
          </button>
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
      ))}
    </div>
  );
}

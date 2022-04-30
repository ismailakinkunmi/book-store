import React from "react";
import Form from "./form";

const book = (props) => (
  <div className="book-container">
    <div className="card-container">
      <hr />
      <p className="book-category">{props.category}</p>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>Comments</p>
      <span />
      <button type="button">Remove</button>
      <span />
      <p>Edit</p>
      <span />
      <div className="progress-circle">
        <span>64%</span>
        <p>Completed</p>
      </div>

      <p>CURRENT CHAPTER</p>
      <p>Chapter 17</p>
      <button type="submit">UPDATE PROGRESS</button>
    </div>
    <Form />
  </div>
);

export default book;

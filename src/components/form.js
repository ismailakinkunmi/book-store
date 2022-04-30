import React from "react";

const form = () => (
  <div>
    <h2>Add new book</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <select>
        <option>Action</option>
        <option>Science fiction</option>
        <option>Economy</option>
      </select>
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);
export default form;

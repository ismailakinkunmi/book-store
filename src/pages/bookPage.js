import React from "react";
import Book from "../components/book";
import Header from "../components/header";

const bookPage = () => (
  <main>
    <Header />
    <Book category="Action" author="Suzanne Collins" title="The Hunger Games" />
    <Book category="Science Fiction" author="Frank Herbert" title="Dune" />
    <Book
      category="Economy"
      author="Suzanne Collins"
      title="Capital in the Twenty-First Century"
    />
  </main>
);

export default bookPage;

import React from "react";
import Book from "../components/book";
import Header from "../components/header";

const bookPage = () => (
  <main>
    <Header />
    <Book category="Action" author="Suzanne Collins" title="The Hunger Games" />
  </main>
);

export default bookPage;

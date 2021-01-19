import React, { createContext, useContext, useState, useEffect } from "react";
import { getSavedBooks, saveBook } from "./API.js";

const BookContext = createContext();

export function BookProvider(props) {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    getSavedBooks().then(result => {
      setSavedBooks(result);
    });
  }, []);

  const handleSave = book => {
    saveBook(book).then(result => {
      setSavedBooks(prevState => [...prevState, result]);
    });
  };

  return <BookContext.Provider value={{ savedBooks, handleSave }} {...props} />;
}

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error(
      "useBooks can only be used in a descendent of BookProvider"
    );
  }

  return context;
}

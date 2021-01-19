import React, { createContext, useContext, useState, useEffect } from "react";
import { getSavedBooks } from "./API.js";

const BookContext = createContext();

export function BookProvider(props) {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    getSavedBooks().then(result => {
      setSavedBooks({
        books: result,
      });
    });
  }, []);

  return <BookContext.Provider value={{ savedBooks }} {...props} />;
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

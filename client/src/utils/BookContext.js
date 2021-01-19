import React, { createContext, useContext, useState, useEffect } from "react";
import { getSavedBooks } from "./API.js";

const BookContext = createContext();

export function BookProvider(props) {
  const [savedBooks, setSavedBooks] = useState({
    err: "",
    books: [],
  });

  useEffect(() => {
    getSavedBooks()
      .then(result => {
        setSavedBooks({
          err: "",
          books: result,
        });
      })
      .catch(err => {
        setSavedBooks(prevState => ({
          err: err.message,
          ...prevState,
        }));
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

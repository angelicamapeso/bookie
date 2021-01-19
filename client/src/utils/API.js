export function getSavedBooks() {
  return fetch("/api/books")
    .then(response => response.json())
    .then(result =>
      result.data.map(book => {
        book.saved = true;
        return book;
      })
    );
}

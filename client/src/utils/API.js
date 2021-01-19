const API_KEY = process.env.REACT_APP_API_KEY;

export function searchBooks(search) {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`
  )
    .then(response => response.json())
    .then(result =>
      result.items.map(item => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        image: item.volumeInfo.imageLinks.thumbnail,
        link: item.volumeInfo.infoLink,
        saved: false,
      }))
    );
}

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

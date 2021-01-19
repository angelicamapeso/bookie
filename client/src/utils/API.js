export function getSavedBooks() {
  return fetch("/api/books").then(response => response.json());
}

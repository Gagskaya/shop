import axios from "axios";

export const fetchBooks = () => async (dispatch) => {
  const res = await axios.get("/books.json");
  dispatch(setBooks(res.data));
};
export const setBooks = (books) => ({
  type: "SET_BOOKS",
  payload: books,
});
export const addBookToCart = (book) => ({
  type: "ADD_BOOK_TO_CART",
  payload: book,
});
export const removeBookFromCart = (id) => ({
  type: "REMOVE_BOOK_FROM_CART",
  payload: id,
});
export const setFilter = (value) => ({
  type: "SET_FILTER",
  payload: value,
});
export const setSort = (sort) => ({
  type: "SET_SORT",
  payload: sort,
});

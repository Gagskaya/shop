import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card } from "semantic-ui-react";
import orderBy from "lodash/orderBy";
import uniqBy from "lodash/uniqBy";

import "./App.scss";
import { fetchBooks } from "./actions/books";
import { setSort } from "./actions/books";
import { setFilter } from "./actions/books";
import { removeBookFromCart } from "./actions/books";
import { addBookToCart } from "./actions/books";
import { TopMenu } from "./components/TopMenu";
import { Books } from "./components/Books";
import { Sort } from "./components/Sort";

const sortBooks = (books, sortBy) => {
  switch (sortBy) {
    case "all":
      return books;
    case "high-price":
      return orderBy(books, "price", "desc");
    case "low-price":
      return orderBy(books, "price", "asc");
    case "author":
      return orderBy(books, "author", "asc");
    default:
      return books;
  }
};

const filterBooks = (books, filterBy) =>
  books.filter(
    (book) =>
      book.title.toLowerCase().indexOf(filterBy.toLowerCase()) >= 0 ||
      book.author.toLowerCase().indexOf(filterBy.toLowerCase()) >= 0
  );

const searchBooks = (books, sortBy, filterBy) => {
  return sortBooks(filterBooks(books, filterBy), sortBy);
};
export const App = () => {
  const books = useSelector(
    (state) =>
      state.books.items &&
      searchBooks(state.books.items, state.sort.sortBy, state.filter.filterBy)
  );
  const isReady = useSelector(({ books }) => books.isReady);
  const filterBy = useSelector(({ filter }) => filter.filterBy);
  const sortBy = useSelector(({ sort }) => sort.sortBy);
  const totalPrice = useSelector(({ cart }) =>
    cart.books.reduce((total, book) => total + book.price, 0)
  );
  const totalAmount = useSelector(({ cart }) => cart.books.length);
  const cart = useSelector(({ cart }) => uniqBy(cart.books, (o) => o.id));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <Container>
      <TopMenu
        totalPrice={totalPrice}
        totalAmount={totalAmount}
        cart={cart}
        removeBookFromCart={removeBookFromCart}
      />
      <Sort
        setSort={setSort}
        setFilter={setFilter}
        sortBy={sortBy}
        filterBy={filterBy}
      />
      <Card.Group itemsPerRow={4}>
        {isReady
          ? books &&
            books.map((book) => (
              <Books
                book={book}
                key={book.id}
                addBookToCart={addBookToCart}
                cart={cart}
              />
            ))
          : "Загрузка..."}
      </Card.Group>
    </Container>
  );
};

import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import orderBy from 'lodash/orderBy'

import './App.scss'
import { setBooks } from "./actions/setBooks";
import { setSort } from './actions/setSort';
import { setFilter } from './actions/setFilter';
import { addBookToCart } from './actions/addBookToCart';
import { TopMenu } from './components/TopMenu';
import { Books } from './components/Books';
import { Sort } from './components/Sort';


const sortBooks = (books, sortBy) => {
  switch (sortBy) {
    case 'all':
      return books;
    case 'high-price':
      return orderBy(books, 'price', 'desc')
    case 'low-price':
      return orderBy(books, 'price', 'asc')
    case 'author':
      return orderBy(books, 'author', 'asc')
    default:
      return books;
  }
}

const filterBooks = (books, filterBy) => books.filter(book => book.title.toLowerCase().indexOf(filterBy.toLowerCase()) >= 0 || book.author.toLowerCase().indexOf(filterBy.toLowerCase()) >= 0);

const searchBooks = (books, sortBy, filterBy) => {
  return sortBooks(filterBooks(books, filterBy), sortBy);
}
const App = props => {
  const { books, isReady, setBooks, setSort, setFilter, sortBy, filterBy, totalPrice, totalAmount, addBookToCart, cartBooks, addCount } = props;
  useEffect(() => {
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    })
  }, [setBooks])
  return (
    <Container>
      <TopMenu totalPrice={totalPrice} totalAmount={totalAmount} />
      <Sort setSort={setSort} setFilter={setFilter} sortBy={sortBy} filterBy={filterBy} />
      <Books books={books} isReady={isReady} addBookToCart={addBookToCart} cartBooks={cartBooks} addCount={addCount} />
    </Container>
  )
}
const mapStateToProps = ({ books, sort, filter, cart }) => ({
  books: books.items && searchBooks(books.items, sort.sortBy, filter.filterBy),
  isReady: books.isReady,
  filterBy: filter.filterBy,
  sortBy: sort.sortBy,
  totalPrice: cart.books.reduce((total, book) => total + book.price, 0),
  totalAmount: cart.books.length,
  cartBooks: cart.books,
  addCount: 0
})
export default connect(mapStateToProps, { setBooks, setSort, setFilter, addBookToCart })(App);
import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Card } from 'semantic-ui-react';
import orderBy from 'lodash/orderBy'

import './App.scss'
import { setBooks } from "./actions/setBooks";
import { setSort } from './actions/setSort';
import { setFilter } from './actions/setFilter';
import { removeBookFromCart } from './actions/removeBookFromCart';
import { addBookToCart } from './actions/addBookToCart';
import { TopMenu } from './components/TopMenu';
import { Books } from './components/Books';
import { Sort } from './components/Sort';
import uniqBy from 'lodash/uniqBy'


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
  const { books, isReady, setBooks, setSort, setFilter, sortBy, filterBy, totalPrice, totalAmount, addBookToCart, cart, addedCount, removeBookFromCart } = props;
  console.log(props)
  useEffect(() => {
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    })
  }, [setBooks])
  return (
    <Container>
      <TopMenu totalPrice={totalPrice} totalAmount={totalAmount} cart={cart} removeBookFromCart={removeBookFromCart} />
      <Sort setSort={setSort} setFilter={setFilter} sortBy={sortBy} filterBy={filterBy} />
      <Card.Group itemsPerRow={4}>
        {
          isReady ? books && books.map(book => <Books book={book} key={book.id} removeBookFromCart={removeBookFromCart} addBookToCart={addBookToCart} cart={cart} addedCount={addedCount} />)
            : 'Загрузка...'}
      </Card.Group>

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
  cart: uniqBy(cart.books, o => o.id)
})
export default connect(mapStateToProps, { setBooks, setSort, setFilter, addBookToCart, removeBookFromCart })(App);
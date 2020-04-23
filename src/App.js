import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import orderBy from 'lodash/orderBy'

import './App.scss'
import { setBooks } from "./actions/setBooks"
import { setFilter } from './actions/setFilter';
import { TopMenu } from './components/TopMenu'
import { Books } from './components/Books';
import { Filter } from './components/Filter';

const sortBy = (books, filterBy) => {
  switch (filterBy) {
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
const App = (props) => {
  const { books, isReady, setBooks, setFilter } = props;
  console.log(props)
  useEffect(() => {
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    })
  }, [setBooks])
  return (
    <Container>
      <TopMenu />
      <Filter setFilter={setFilter} />
      <Books books={books} isReady={isReady} />
    </Container>
  )
}
const mapStateToProps = ({ books, filter }) => ({
  books: sortBy(books.items, filter.filterBy),
  isReady: books.isReady
})
export default connect(mapStateToProps, { setBooks, setFilter })(App);
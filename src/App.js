import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import orderBy from 'lodash/orderBy'

import './App.scss'
import { setBooks } from "./actions/setBooks";
import { setSort } from './actions/setSort';
import { setFilter } from './actions/setFilter';
import { TopMenu } from './components/TopMenu';
import { Books } from './components/Books';
import { Sort } from './components/Sort';


const sortBy = (books, sortBy) => {
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

const App = props => {
  const { books, isReady, setBooks, setSort, setFilter, sortBy, filterBy } = props;
  useEffect(() => {
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    })
  }, [setBooks])
  return (
    <Container>
      <TopMenu />
      <Sort setSort={setSort} setFilter={setFilter} sortBy={sortBy} filterBy={filterBy} />
      <Books books={books} isReady={isReady} />
    </Container>
  )
}
const mapStateToProps = ({ books, sort, filter }) => ({
  books: sortBy(books.items, sort.sortBy),
  isReady: books.isReady,
  filterBy: filter.filterBy,
  sortBy: sort.sortBy
})
export default connect(mapStateToProps, { setBooks, setSort, setFilter })(App);
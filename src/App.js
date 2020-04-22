import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import { setBooks } from "./actions/setBooks"
import TopMenu from './components/TopMenu'
import Books from './components/Books';
import './App.scss'
import { Filter } from './components/Filter';
import { setFilter } from './actions/setFilter';


const App = (props) => {
  const { setBooks, books, isReady, setFilter } = props;
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
const mapStateToProps = ({ booksReducer }) => ({
  books: booksReducer.books,
  isReady: booksReducer.isReady
})
export default connect(mapStateToProps, { setBooks, setFilter })(App);
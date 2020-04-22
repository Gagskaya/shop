import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import { setBooks } from "./actions/setBooks"
import TopMenu from './components/TopMenu'
import Books from './components/Books';
import './App.scss'


const App = (props) => {
  const { setBooks, books, isReady } = props;
  useEffect(() => {
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    })
  }, [setBooks])
  return (
    <Container>
      <TopMenu />
      <Books books={books} isReady={isReady} />
    </Container>
  )
}
const mapStateToProps = ({ booksReducer }) => ({
  books: booksReducer.books,
  isReady: booksReducer.isReady
})
const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
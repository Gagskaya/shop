import { combineReducers} from 'redux'
import {booksReducer} from './booksReducer'
import {cartReducer} from './cartReducer'

export const rootReducer = combineReducers({
    booksReducer,
    cartReducer
})
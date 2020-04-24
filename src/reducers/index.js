import { combineReducers } from 'redux'
import { books } from './books'
import { cart } from './cart'
import { sort } from './sort'
import { filter } from './filter'

export const rootReducer = combineReducers({
    books,
    cart,
    sort,
    filter
})
const initialState = {
    books: []
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK_TO_CART":
            return {
                ...state,
                books: [
                    ...state.books,
                    action.payload
                ]
            }
        case "REMOVE_BOOK_FROM_CART":
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            }
        default:
            return state;
    }
}
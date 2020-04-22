const initialState = {
    books : null,
    isReady : false,
    filterBy : 'all'
}

export const booksReducer = (state = initialState,action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return {
                ...state,
                books : action.payload,
                isReady : true
            }
        case "SET_FILTER":
            return {
                ...state,
                filterBy : action.payload
            }
        default:
            return state;
    }
}
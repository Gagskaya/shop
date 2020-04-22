const initialState = {
    books : null,
    isReady : false
}

export const booksReducer = (state = initialState,action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return {
                ...state,
                books : action.payload,
                isReady : true
            }
        default:
            return state;
    }
}
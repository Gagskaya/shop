const initialState = {
    items : null,
    isReady : false
}

export const books = (state = initialState,action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return {
                ...state,
                items : action.payload,
                isReady : true
            }
        default:
            return state;
    }
}
const initialState = {
    sortBy: ''
}

export const sort = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SORT":
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state;
    }
}
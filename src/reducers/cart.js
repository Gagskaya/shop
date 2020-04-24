const initialState = {
    books: [
        {
            "id": 0,
            "title": "Происхождение",
            "author": "Дэн Браун",
            "image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            "price": 710,
            "rating": 3
        },
        {
            "id": 0,
            "title": "Происхождение",
            "author": "Дэн Браун",
            "image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            "price": 710,
            "rating": 3
        },
        {
            "id": 0,
            "title": "Происхождение",
            "author": "Дэн Браун",
            "image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
            "price": 710,
            "rating": 3
        },
    ]
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                books: [
                    ...state.books,
                    action.payload
                ]
            }
        case "REMOVE_BOOK":
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            }
        default:
            return state;
    }
}
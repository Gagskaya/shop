import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'


export const Books = ({ book, addBookToCart, cart }) => {
    const addedCount = cart.reduce((total, item) => total + (book.id === item.id ? 1 : 0), 0)
    return (
        <Card>
            <Image src={book.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{book.title}</Card.Header>
                <Card.Description>
                    {book.author}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='rub' />
                {book.price}
            </Card.Content>
            <Card.Content extra>
                <Button onClick={() => addBookToCart(book)}><span>Добавить в корзину {addedCount > 0 && `(${addedCount})`}</span> </Button>
            </Card.Content>
        </Card>
    )

}

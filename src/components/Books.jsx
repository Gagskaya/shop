import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Books = ({ isReady, books }) => {
    return (
        !isReady ? "Загрузка..." :
            <Card.Group itemsPerRow={4}>
                {books.map(book => <Card key={book.id}>
                    <Image src={book.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{book.title}</Card.Header>
                        <Card.Description>
                            {book.author}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='rub' />
                            {book.price}
                        </a>
                    </Card.Content>
                </Card>)}
            </Card.Group>

    )

}
export default Books;
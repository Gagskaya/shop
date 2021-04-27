import React from "react";
import { useDispatch } from "react-redux";
import { Button, Image, List } from "semantic-ui-react";

export const CartList = ({ title, id, image, removeBookFromCart }) => {
  const dispatch = useDispatch();
  return (
    <List selection divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button color="red" onClick={() => dispatch(removeBookFromCart(id))}>
            Удалить
          </Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>{title}</List.Content>
      </List.Item>
    </List>
  );
};

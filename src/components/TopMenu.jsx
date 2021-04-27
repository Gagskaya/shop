import React from "react";
import { Menu, Popup } from "semantic-ui-react";
import { CartList } from "./CartList";

export const TopMenu = ({
  totalPrice,
  totalAmount,
  cart,
  removeBookFromCart,
}) => {
  return (
    <Menu>
      <Menu.Item name="shop">Магазин книг</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="total">
          Итого : &nbsp; <b>{totalPrice}</b> &nbsp; руб.
        </Menu.Item>
        <Popup
          trigger={
            <Menu.Item name="cart">
              Корзина (<b>{totalAmount}</b>)
            </Menu.Item>
          }
          content={
            cart &&
            cart.map((cart, i) => (
              <CartList
                removeBookFromCart={removeBookFromCart}
                {...cart}
                key={i}
              />
            ))
          }
          on="click"
        />
      </Menu.Menu>
    </Menu>
  );
};

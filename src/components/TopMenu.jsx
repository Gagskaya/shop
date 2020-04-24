import React from 'react'
import { Menu } from 'semantic-ui-react'


export const TopMenu = ({ totalPrice, totalAmount }) => {
    return (
        <Menu>
            <Menu.Item
                name='browse'>
                Магазин книг
                </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='submit' >
                    Итого :  &nbsp; <b>{totalPrice}</b> &nbsp; руб.
                </Menu.Item>
                <Menu.Item
                    name='signup'>
                    Корзина (<b>{totalAmount}</b>)
                 </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

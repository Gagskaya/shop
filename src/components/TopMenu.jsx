import React from 'react'
import { Menu } from 'semantic-ui-react'



const TopMenu = () => {
    return (
        <Menu>
            <Menu.Item
                name='browse'>
                Магазин книг
                </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='submit' >
                    Итого :  &nbsp; <b>0</b> &nbsp; руб.
                </Menu.Item>
                <Menu.Item
                    name='signup'>
                    Корзина (<b>0</b>)
                 </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}
export default TopMenu;
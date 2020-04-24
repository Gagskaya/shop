import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Filter } from './Filter';

export const Sort = ({ setSort, setFilter, sortBy, filterBy }) => {
    const [activeItem, setActiveItem] = useState('all');
    const onClick = (name) => {
        setActiveItem(name);
        setSort(name);
    }
    return (
        <Menu secondary>
            <Menu.Item name='all'
                onClick={() => onClick('all')}
                active={activeItem === 'all'}>
                Все
            </Menu.Item>
            <Menu.Item name='high-price'
                onClick={() => onClick('high-price')}
                active={activeItem === 'high-price'}>
                Цена (дорогие)
            </Menu.Item>
            <Menu.Item name='low-price'
                onClick={() => onClick('low-price')}
                active={activeItem === 'low-price'}>
                Цена (дешевые)
            </Menu.Item>
            <Menu.Item name='author'
                onClick={() => onClick('author')}
                active={activeItem === 'author'}>
                Автор
            </Menu.Item>
            <Filter filterBy={filterBy} setFilter={setFilter} />
        </Menu>
    )
}

import React from 'react'
import { Menu, Input } from 'semantic-ui-react'


export const Filter = ({ setFilter, filterBy }) => {
    return (
        <Menu.Item>
            <Input placeholder="Введите запрос" value={filterBy} onChange={e => setFilter(e.target.value)} >
            </Input>
        </Menu.Item>
    )
}

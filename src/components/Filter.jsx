import React from "react";
import { useDispatch } from "react-redux";
import { Menu, Input } from "semantic-ui-react";

export const Filter = ({ setFilter, filterBy }) => {
  const dispatch = useDispatch();
  return (
    <Menu.Item>
      <Input
        placeholder="Введите запрос"
        value={filterBy}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      ></Input>
    </Menu.Item>
  );
};

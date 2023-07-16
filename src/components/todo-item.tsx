import React, { FC } from "react";
import { ITodos } from "../types/types";

interface TodoItemProps {
  todo: ITodos
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <>
      <ul>
        <li>{todo.id}</li>
        <li>{todo.title}</li>
      </ul>
      <br />
    </>
  )
}
export default TodoItem;

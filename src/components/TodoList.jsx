import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "./UI/StyledComponents";
import { TodoItem } from "./TodoItem";
import { getAllTodo } from "../store/todoThunk";

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => store.todo);
  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  return (
    <List>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </List>
  );
};

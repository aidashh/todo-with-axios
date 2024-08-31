import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, PrimaryButton } from "./UI/StyledComponents";
import { postTodoRequest } from "../store/todoThunk";

export const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setTodoValue(e.target.value);
  };

  const submitHandler = (e) => {
    if (!todoValue) {
      return alert("Заполните поле");
    }
    e.preventDefault();

    const newTodo = {
      title: todoValue,
      id: Date.now().toString(),
    };

    dispatch(postTodoRequest(newTodo));
    setTodoValue("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="Enter..."
        value={todoValue}
        onChange={changeHandler}
      />
      <PrimaryButton type="submit">Add</PrimaryButton>
    </Form>
  );
};

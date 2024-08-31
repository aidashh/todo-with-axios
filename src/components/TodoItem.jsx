import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoRequest, updateTodoRequests } from "../store/todoThunk";
import { WarningButton } from "./UI/StyledComponents";
import { TodoText } from "./UI/StyledComponents";
import { SecondaryButton } from "./UI/StyledComponents";
import { ListItem } from "./UI/StyledComponents";
import { EditInput } from "./UI/StyledComponents";
import { DangerButton } from "./UI/StyledComponents";

export const TodoItem = ({ title, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodoRequest(id));
  };

  const handleEditing = () => {
    setIsEdit(true);
  };

  const updateHandler = () => {
    dispatch(updateTodoRequests({ id, title: newTitle }));
    setIsEdit(false);
  };
  return (
    <ListItem>
      {isEdit ? (
        <EditInput
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <TodoText>{title}</TodoText>
      )}

      {isEdit ? (
        <WarningButton onClick={updateHandler}>update</WarningButton>
      ) : (
        <SecondaryButton onClick={handleEditing}>edit</SecondaryButton>
      )}

      <DangerButton onClick={() => deleteHandler(id)}>delete</DangerButton>
    </ListItem>
  );
};

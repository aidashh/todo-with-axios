import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstanse";

export const getAllTodo = createAsyncThunk(
  "todo/getAllTodo",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("todo");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postTodoRequest = createAsyncThunk(
  "todo/postTodoRequest",
  async (todoData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.post("/todo", todoData);
      dispatch(getAllTodo());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTodoRequest = createAsyncThunk(
  "todo/deleteTodoRequest",
  async (todoId, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`/todo/${todoId}`);
      dispatch(getAllTodo());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateTodoRequests = createAsyncThunk(
  "todo/updateTodoRequests",
  async ({ id, title }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.patch(`/todo/${id}`, { title });
      dispatch(getAllTodo());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

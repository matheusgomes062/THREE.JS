import {
  ADD_TODO,
  DELETE_TODO,
  REPLACE_TODO,
  TOGGLE_TODO
} from './actionTypes';

let nextTodoId = 0;

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    title
  }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});

export const replaceTodo = (id, title) => ({
  type: REPLACE_TODO,
  payload: {
    id,
    title
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});

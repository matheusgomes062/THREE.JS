import {
  ADD_TODO,
  DELETE_TODO,
  REPLACE_TODO,
  TOGGLE_TODO
} from '../actionTypes';

import axios from 'axios';

const initialState = {
  todo_list: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, title } = action.payload;
      return {
        ...state,
        todo_list: [...state.todo_list, { id, title }]
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todo_list: state.todo_list.filter((todo) => todo.id != id)
      };
    }
    case REPLACE_TODO: {
      const { id } = action.payload.id;
      const { title } = action.payload.title;

      return {
        ...state,
        todo_list: state.todo_list.map((todo) => {
          if (todo.id != id) {
            return todo;
          }
          return {
            ...todo,
            title: title
          };
        })
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todo_list: state.todo_list.map((todo) => {
          if (todo.id != id) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed
          };
        })
      };
    }
    default:
      return state;
  }
}

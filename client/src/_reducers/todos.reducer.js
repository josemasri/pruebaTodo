import { todoConstants } from '../_constants/todos.constants';

const {
  GET_ALL,
  GET,
  CREATE,
  UPDATE,
  UPDATE_COMPLETED,
  DELETE,
} = todoConstants;

const initialState = {
  todos: [],
};

export function todos(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        todos: action.payload,
      };

    case GET:
      return {
        ...state,
        todo: action.payload,
      };

    case CREATE:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case UPDATE:
      return {
        ...state,
        todo: action.payload,
        todos: state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return action.payload;
          } else {
            return todo;
          }
        }),
      };

    case UPDATE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return action.payload;
          } else {
            return todo;
          }
        }),
      };

    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

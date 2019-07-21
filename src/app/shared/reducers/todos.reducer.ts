import { Todo } from '../models/todo';
import { TOGGLE_DONE, ADD_TODO } from './todos.actions';

export function todosReducer(state = [], action) {
  switch ( action.type ) {
    case ADD_TODO:
      const largestTodoId = state.reduce(
        ( builtUp, item ) => {
          return item.todoId > builtUp ? item.todoId : builtUp;
        },
        0
      );
      return [
          ...state,
          { todoId: largestTodoId + 1, title: action.title, done: action.value }
        ]
        .sort( compare );
    case TOGGLE_DONE:
      return [...state]
        .map(
        item => {
          return item.todoId === action.todoId
            ? { ...item, done: action.value }
            : { ...item };
          }
        )
        .sort( compare );
    default:
      return state;
  }
}

const compare = ( a: Todo, b: Todo ) => {
  if ( a.done ) {
    if ( b.done ) {
      return (a.todoId > b.todoId) ? -1 : 1;
    } else {
      return 1;
    }
  } else {
    if ( b.done ) {
      return -1;
    } else {
      return (a.todoId > b.todoId) ? -1 : 1;
    }
  }
};

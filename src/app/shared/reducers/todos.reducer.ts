import { Todo } from '../models/todo';
import { TOGGLE_DONE, ADD_TODO, CLEAR_ALL_TODOS } from './todos.actions';

export function todosReducer(state = [], action) {
  switch ( action.type ) {
    case ADD_TODO:
      const largestid = state.reduce(
        ( builtUp, item ) => {
          return item.id > builtUp ? item.id : builtUp;
        },
        0
      );
      return [
          ...state,
          { id: largestid + 1, title: action.title, done: action.value, description: action.description }
        ]
        .sort( compare );
    case TOGGLE_DONE:
      return [...state]
        .map(
        item => {
          return item.id === action.id
            ? { ...item, done: action.value }
            : { ...item };
          }
        )
        .sort( compare );
    case CLEAR_ALL_TODOS:
      return [];
    default:
      return state;
  }
}

const compare = ( a: Todo, b: Todo ) => {
  if ( a.done ) {
    if ( b.done ) {
      return (a.id > b.id) ? -1 : 1;
    } else {
      return 1;
    }
  } else {
    if ( b.done ) {
      return -1;
    } else {
      return (a.id > b.id) ? -1 : 1;
    }
  }
};

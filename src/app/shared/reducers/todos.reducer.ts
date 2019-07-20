import { Todo } from '../models/todo';
import { TOGGLE_DONE } from './todos.actions';

const todosState: Todo[] = [
  { todoId: 1, done: false, title: 'Eat icecream' },
  { todoId: 3, done: false, title: 'Water the plants' },
  { todoId: 4, done: false, title: 'Finish app' },
  { todoId: 5, done: false, title: 'Go to the gym' },
  { todoId: 8, done: false, title: 'Create more todos' },
  { todoId: 9, done: false, title: 'Refrain procrastinating' },
  { todoId: 2, done: true, title: 'Get a haircut' },
  { todoId: 6, done: true, title: 'Beat Super Mario Odyssey' },
  { todoId: 7, done: true, title: 'Check mailbox' },
];

export function todosReducer(state = todosState, action) {
  switch ( action.type ) {
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
  }
  return state;
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

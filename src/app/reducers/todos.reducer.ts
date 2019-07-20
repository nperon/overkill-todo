import { Todo } from '../shared/models/todo';

const todosState: Todo[] = [
  {id: 1, done: false, title: 'Eat icecream'},
  {id: 2, done: false, title: 'Water the plants'},
  {id: 3, done: true, title: 'Finish app'},
  {id: 4, done: true, title: 'Go to the gym'},
  {id: 5, done: false, title: 'Create more todos'},
  {id: 6, done: false, title: 'Refrain procrastinating'},
  {id: 7, done: false, title: 'Get a haircut'},
  {id: 8, done: false, title: 'Beat Super Mario Odyssey'},
  {id: 9, done: false, title: 'Check mailbox'},
];

export function todosReducer(state = todosState, action) {
  return state;
}

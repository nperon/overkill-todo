import { todosReducer } from './todos.reducer'
import { ToggleDoneAction } from './todos.actions';
import { Todo } from '../models/todo';

const todosState: Todo[] = [
  { todoId: 2, title: 'todo 2', done: false },
  { todoId: 1, title: 'todo 1', done: false },
  { todoId: 4, title: 'todo 4', done: true },
  { todoId: 3, title: 'todo 3', done: true },
];

describe('todosReducer', () => {
  it('ToggleDoneAction : toggling done todo to undone', () => {
    const expectedState: Todo[] = [
      { todoId: 3, title: 'todo 3', done: false },
      { todoId: 2, title: 'todo 2', done: false },
      { todoId: 1, title: 'todo 1', done: false },
      { todoId: 4, title: 'todo 4', done: true },
    ];
    const action = new ToggleDoneAction(3, false);
    const newState = todosReducer(todosState, action);
    expect(newState.length).toBe(expectedState.length);
    for ( let i = 0 ; i < expectedState.length ; i++) {
      expect(newState[i].todoId).toBe(expectedState[i].todoId);
      expect(newState[i].title).toBe(expectedState[i].title);
      expect(newState[i].done).toBe(expectedState[i].done);
    }
  });
  it('ToggleDoneAction : toggling undone todo to done', () => {
    const expectedState: Todo[] = [
      { todoId: 2, title: 'todo 2', done: false },
      { todoId: 4, title: 'todo 4', done: true },
      { todoId: 3, title: 'todo 3', done: true },
      { todoId: 1, title: 'todo 1', done: true },
    ];
    const action = new ToggleDoneAction(1, true);
    const newState = todosReducer(todosState, action);
    expect(newState.length).toBe(expectedState.length);
    for ( let i = 0 ; i < expectedState.length ; i++) {
      expect(newState[i].todoId).toBe(expectedState[i].todoId);
      expect(newState[i].title).toBe(expectedState[i].title);
      expect(newState[i].done).toBe(expectedState[i].done);
    }
  });
});

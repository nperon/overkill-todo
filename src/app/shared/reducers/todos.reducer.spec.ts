import { todosReducer } from './todos.reducer'
import {AddTodoAction, ToggleDoneAction} from './todos.actions';
import { Todo } from '../models/todo';

const todosState: Todo[] = [
  { id: 2, title: 'todo 2', done: false, description: 'abcdef' },
  { id: 1, title: 'todo 1', done: false, description: 'abcdef' },
  { id: 4, title: 'todo 4', done: true, description: 'abcdef' },
  { id: 3, title: 'todo 3', done: true, description: 'abcdef' },
];

describe('todosReducer', () => {
  it('ToggleDoneAction : toggling done todo to undone', () => {
    const expectedState: Todo[] = [
      { id: 3, title: 'todo 3', done: false, description: 'abcdef' },
      { id: 2, title: 'todo 2', done: false, description: 'abcdef' },
      { id: 1, title: 'todo 1', done: false, description: 'abcdef' },
      { id: 4, title: 'todo 4', done: true, description: 'abcdef' },
    ];
    const action = new ToggleDoneAction(3, false);
    const newState = todosReducer(todosState, action);
    expect(newState.length).toBe(expectedState.length);
    for ( let i = 0 ; i < expectedState.length ; i++) {
      expect(newState[i].id).toBe(expectedState[i].id);
      expect(newState[i].title).toBe(expectedState[i].title);
      expect(newState[i].done).toBe(expectedState[i].done);
    }
  });
  it('ToggleDoneAction : toggling undone todo to done', () => {
    const expectedState: Todo[] = [
      { id: 2, title: 'todo 2', done: false, description: 'abcdef' },
      { id: 4, title: 'todo 4', done: true, description: 'abcdef' },
      { id: 3, title: 'todo 3', done: true, description: 'abcdef' },
      { id: 1, title: 'todo 1', done: true, description: 'abcdef' },
    ];
    const action = new ToggleDoneAction(1, true);
    const newState = todosReducer(todosState, action);
    expect(newState.length).toBe(expectedState.length);
    for ( let i = 0 ; i < expectedState.length ; i++) {
      expect(newState[i].id).toBe(expectedState[i].id);
      expect(newState[i].title).toBe(expectedState[i].title);
      expect(newState[i].done).toBe(expectedState[i].done);
    }
  });
  it('AddTodoAction', () => {
    const expectedState: Todo[] = [
      { id: 2, title: 'todo 2', done: false, description: 'abcdef' },
      { id: 1, title: 'todo 1', done: false, description: 'abcdef' },
      { id: 4, title: 'todo 4', done: true, description: 'abcdef' },
      { id: 3, title: 'todo 3', done: true, description: 'abcdef' },
    ];
    const text = 'one more todo';
    const todoState = false;
    const todoDescription = 'abcdef';
    const action = new AddTodoAction(text, todoState, todoDescription);
    const newState = todosReducer(todosState, action);
    expect(newState.length).toBe(expectedState.length + 1);
    const expectedNew: Todo = newState[0];
    expect(expectedNew.id).toBe(5);
    expect(expectedNew.title).toBe(text);
    expect(expectedNew.done).toBe(todoState);
    expect(expectedNew.description).toBe(todoDescription);
  });
});

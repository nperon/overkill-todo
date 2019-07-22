export const TOGGLE_DONE = 'TOGGLE_DONE';
export const ADD_TODO = 'ADD_TODO';
export const CLEAR_ALL_TODOS = 'CLEAR_ALL_TODOS';

export class ToggleDoneAction {
  readonly type = TOGGLE_DONE;
  constructor(public id: number, public value: boolean) {}
}

export class AddTodoAction {
  readonly type = ADD_TODO;
  constructor(public id: number, public title: string, public value: boolean, public description: string) {}
}

export class ClearAllTodosAction {
  readonly type = CLEAR_ALL_TODOS;
}


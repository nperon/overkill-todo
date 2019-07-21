export const TOGGLE_DONE = 'TOGGLE_DONE';
export const ADD_TODO = 'ADD_TODO';

export class ToggleDoneAction {
  readonly type = TOGGLE_DONE;
  constructor(public id: number, public value: boolean) {}
}

export class AddTodoAction {
  readonly type = ADD_TODO;
  constructor(public title: string, public value: boolean) {}
}

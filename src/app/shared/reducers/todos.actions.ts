export const TOGGLE_DONE = 'TOGGLE_DONE';

export class ToggleDoneAction {
  readonly type = TOGGLE_DONE;
  constructor(public todoId: number, public value: boolean) {}
}

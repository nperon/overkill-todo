import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import { AddTodoAction} from './todos.actions';
import { Todo } from '../models/todo';

export const FETCH_TODOS = 'FETCH_TODOS';

export class FetchTodosAction {
  readonly type = FETCH_TODOS;
  constructor() {}
}

@Injectable()
export class TodosEffects {

  @Effect()
  fetchTodos = this.actions$
    .pipe(
      ofType(FETCH_TODOS),
      switchMap(
        (action: FetchTodosAction) => {
          const todosObs: Observable<Todo[]> = this.todosService.getTodos();
          return todosObs;
        }
      ),
      switchMap(
      (data: Todo[]) => data.map( item => new AddTodoAction(item.title, item.done) )
      )
    );

  constructor(
    private actions$: Actions,
    private todosService: TodoService
  ) {}
}

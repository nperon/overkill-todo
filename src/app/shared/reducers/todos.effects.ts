import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import {AddTodoAction, ClearAllTodosAction, ToggleDoneAction} from './todos.actions';
import { Todo } from '../models/todo';

const FETCH_TODOS = 'FETCH_TODOS';
const UPDATE_AND_FETCH_TODO = 'UPDATE_AND_FETCH_TODO';

export class FetchTodosAction {
  readonly type = FETCH_TODOS;
  constructor() {}
}

export class UpdateAndFetchTodoAction {
  readonly type = UPDATE_AND_FETCH_TODO;
  constructor( public id: number, public title: string, public done: boolean, public description: string ) {}
}

@Injectable()
export class TodosEffects {

  constructor(
    private actions$: Actions,
    private todosService: TodoService
  ) {}

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
      (data: Todo[]) => {
          return data.reduce(
            ( builtUp, item ) => {
              return [
                ...builtUp,
                new AddTodoAction(item.title, item.done, item.description)
              ];
            },
            [ new ClearAllTodosAction() ]
          );
        }
      )
    );

  @Effect()
  updateTodo = this.actions$
    .pipe(
      ofType(UPDATE_AND_FETCH_TODO),
      mergeMap(
        (action: UpdateAndFetchTodoAction) => this.todosService.updateTodo(
          { id: action.id, title: action.title, done: action.done, description: action.description }
        ).pipe(
          map(() => new ToggleDoneAction(action.id, action.done))
        )
      )
    );
}

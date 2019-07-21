import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Todo } from '../models/todo';
import { todosReducer } from './todos.reducer';

export interface State {
  todos: Todo[],
}

export const reducers: ActionReducerMap<State> = {
  todos: todosReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';

/**
 * Data source for the TodosTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TodosTableDataSource extends DataSource<Todo> {
  paginator: MatPaginator;
  sort: MatSort;
  todosState: Observable<Todo[]>;

  constructor(
    todosStore: Store<{todos: Todo[]}>
  ) {
    super();
    this.todosState = todosStore.select('todos');
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Todo[]> {
    return this.todosState;
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}
}

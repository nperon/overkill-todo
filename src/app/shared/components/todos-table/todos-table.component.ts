import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TodosTableDataSource } from './todos-table-datasource';
import { Todo } from '../../models/todo';
import { Store } from '@ngrx/store';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FetchTodosAction, UpdateAndFetchTodoAction } from '../../reducers/todos.effects';

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.scss']
})
export class TodosTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Todo>;
  dataSource: TodosTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'done'];

  constructor(
    private store: Store<{todos: Todo[]}>,
  ) {
  }

  ngOnInit() {
    this.dataSource = new TodosTableDataSource(this.store);
    this.store.dispatch(new FetchTodosAction());
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  toggle(row: Todo, event: MatCheckboxChange) {
    const action = new UpdateAndFetchTodoAction(row.id, row.title, event.checked, row.description);
    this.store.dispatch(action);
  }
}

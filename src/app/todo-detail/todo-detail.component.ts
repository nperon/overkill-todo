import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Todo } from '../shared/models/todo';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  todosObs: Observable<Todo[]>;
  todo: Todo;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<{todos: Todo[]}>,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todosObs = this.store.select('todos');
    this.subscription = this.todosObs.subscribe(
      (data: Todo[]) => {
        this.todo = data.find(
          (item: Todo) => (item.id === id)
        );
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material';
import { Todo } from '../../models/todo';
import { CreateTodoAction } from '../../reducers/todos.effects';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  todoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{todos: Todo[]}>,
    private dialogRef: MatDialogRef<TodoAddComponent>
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', null]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.todoForm.controls;
  }

  onSubmit() {
    if (this.todoForm.invalid) {
      return;
    }
    this.store.dispatch(
      new CreateTodoAction(
        this.todoForm.value.title,
        false,
        this.todoForm.value.description
      )
    );
    this.dialogRef.close(true);
  }
}

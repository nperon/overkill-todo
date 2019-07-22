import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TodoAddComponent } from '../todo-add/todo-add.component';

@Component({
  selector: 'app-dialog-opening-button',
  templateUrl: './dialog-opening-button.component.html',
  styleUrls: ['./dialog-opening-button.component.scss']
})
export class DialogOpeningButtonComponent implements OnInit {

  todoAddDialogRef: MatDialogRef<TodoAddComponent>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.todoAddDialogRef = this.dialog.open(TodoAddComponent, null);
  }
}

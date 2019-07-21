import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const todos = [
      { id: 1, done: false, title: 'Eat icecream' },
      { id: 3, done: false, title: 'Water the plants' },
      { id: 4, done: false, title: 'Finish app' },
      { id: 5, done: false, title: 'Go to the gym' },
      { id: 8, done: false, title: 'Create more todos' },
      { id: 9, done: false, title: 'Refrain procrastinating' },
      { id: 2, done: true, title: 'Get a haircut' },
      { id: 6, done: true, title: 'Beat Super Mario Odyssey' },
      { id: 7, done: true, title: 'Check mailbox' },
    ];
    return {todos};
  }

  // Overrides the genId method to ensure that a todo_ always has an id.
  // If the todos array is empty,
  // the method below returns the initial number (1).
  // if the todos array is not empty, the method below returns the highest
  // todo_ id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}

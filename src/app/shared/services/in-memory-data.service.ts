import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const todos = [
      { todoId: 1, done: false, title: 'Eat icecream' },
      { todoId: 3, done: false, title: 'Water the plants' },
      { todoId: 4, done: false, title: 'Finish app' },
      { todoId: 5, done: false, title: 'Go to the gym' },
      { todoId: 8, done: false, title: 'Create more todos' },
      { todoId: 9, done: false, title: 'Refrain procrastinating' },
      { todoId: 2, done: true, title: 'Get a haircut' },
      { todoId: 6, done: true, title: 'Beat Super Mario Odyssey' },
      { todoId: 7, done: true, title: 'Check mailbox' },
    ];
    return {todos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.todoId)) + 1 : 11;
  }
}

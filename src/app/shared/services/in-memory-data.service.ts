import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const todos: Todo[] = [
      { id: 1, done: false, title: 'Order pizza', description: '2 Margherita., 3 Napoletana' },
      {
        id: 3,
        done: false,
        title: 'Water the plants',
        description: 'spider plant, aloe vera, peace lily, jade plant, weeping fig and all others'
      },
      { id: 4, done: false, title: 'Do the shopping', description: 'Bread, Carrots, Orange juice, Olive oil, Coffee filters' },
    ];
    return {todos};
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}

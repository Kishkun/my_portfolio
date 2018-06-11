import { Injectable } from '@angular/core';
import { Todo } from '../to-do-page/classes/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [
      new Todo(0, 'learn HTML5'),
      new Todo(1, 'learn CSS'),
      new Todo(2, 'learn JavaScript')
    ];
  }
}

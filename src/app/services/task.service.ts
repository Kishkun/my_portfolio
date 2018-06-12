import { Injectable } from '@angular/core';
import { Task } from '../to-do-page/classes/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];
  private nextId: number;

  constructor() {
    this.tasks = [
      new Task(0, 'learn HTML5'),
      new Task(1, 'learn CSS'),
      new Task(2, 'learn JavaScript')
    ];

    this.nextId = 3;
  }

  public addTask(text: string): void {
    const task = new Task(this.nextId, text);
    this.tasks.push(task);
    this.nextId++;
  }

  public  getTask(): Task[] {
    return this.tasks;
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

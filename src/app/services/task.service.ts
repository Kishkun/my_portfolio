import {Injectable} from '@angular/core';
import {Task} from '../to-do-page/classes/task';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];
  nextId: number;

  constructor(private http: Http) {
    const tasks = this.getTask();

    if (tasks.length === 0) {
      this.nextId = 0;
    } else {
      const maxId = tasks[tasks.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  addTask(text: string): void {
    const task = new Task(this.nextId, text);
    const tasks = this.getTask();
    tasks.push(task);
    this.setLocalStorageTasks(tasks);
    this.nextId++;
  }

  getTask(): Task[] {
    const localStorageItem = JSON.parse(localStorage.getItem('tasks'));
    return localStorageItem == null ? [] : localStorageItem.tasks;
  }

  deleteTask(id: number): void {
    let tasks = this.getTask();
    tasks = tasks.filter((task) => task.id !== id);
    this.setLocalStorageTasks(tasks);
  }

  private setLocalStorageTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify({tasks: tasks}));
  }
}

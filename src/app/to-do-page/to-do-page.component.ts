import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.css']
})
export class ToDoPageComponent implements OnInit {
  taskText: string;

  constructor(private taskService: TaskService) {
    this.taskText = '';
  }

  ngOnInit() {
  }

  onAddToDoClick(): void {
    this.taskService.addTask(this.taskText);
    this.taskText = '';
  }
}

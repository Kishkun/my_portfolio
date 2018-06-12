import {Component, OnInit, Input} from '@angular/core';
import {Task} from '../classes/task';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()
  task: Task;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}

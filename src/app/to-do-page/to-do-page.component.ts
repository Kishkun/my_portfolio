import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.css']
})
export class ToDoPageComponent implements OnInit {
  private todoText: string;

  constructor() {
    this.todoText = '';
  }

  ngOnInit() {
  }

  private onAddToDoClick(): void {
    console.log('ToDo: ', this.todoText);
    this.todoText = '';
  }
}

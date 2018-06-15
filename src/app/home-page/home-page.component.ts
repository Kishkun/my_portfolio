import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openSliderPage() {
    this.router.navigate(['/slider']);
  }

  openCalculatorPage() {
    this.router.navigate(['/calculator']);
  }

  openBattleShipPage() {
    this.router.navigate(['/battleShip']);
  }

  openToDoListPage() {
    this.router.navigate(['/toDoList']);
  }

  openNewToDoPage() {
    console.log('The project is under development');
  }
}

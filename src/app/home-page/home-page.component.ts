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
    // console.log('open slider');
  }

  openCalculatorPage() {
    this.router.navigate(['/calculator']);
    console.log('open calculator');
  }

  openBattleShipPage() {
    console.log('open battleShip');
  }

  opentoDoListPage() {
    console.log('open toDoList');
  }
}

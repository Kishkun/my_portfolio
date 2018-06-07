import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.component.html',
  styleUrls: ['./slider-page.component.css']
})
export class SliderPageComponent implements OnInit {
  items: Array< any > = [];

  constructor(private router: Router) {
    this.items = [
      { name: '/assets/images/balls1.png' },
      { name: '/assets/images/balls2.png' },
      { name: '/assets/images/balls3.png' },
      { name: '/assets/images/balls4.png' },
      { name: '/assets/images/balls5.png' },
      { name: '/assets/images/balls6.png' }
    ];
  }

  ngOnInit() {
  }

  onBeckToHomePage() {
    this.router.navigate(['/']);
  }
}

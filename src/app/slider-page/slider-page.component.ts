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
      { name: '/assets/images/flag1.jpg' },
      { name: '/assets/images/flag2.jpg' },
      { name: '/assets/images/flag3.jpg' },
      { name: '/assets/images/flag4.jpg' },
      { name: '/assets/images/flag5.jpg' },
      { name: '/assets/images/flag6.jpg' },
      { name: '/assets/images/flag7.jpg' }
    ];
  }

  ngOnInit() {
  }

  onBeckToHomePage() {
    this.router.navigate(['/']);
  }
}

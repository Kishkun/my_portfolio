import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.css']
})
export class CalculatorPageComponent implements OnInit {

  numbers: number;
  displayResult: string;
  operation: string;
  newOperations: string
  firstNumber: number;
  secondNumber: number;


  constructor() {

  }

  onNumberButtonClick() {
    console.log('click number');
  }

  ngOnInit() {
  }

}

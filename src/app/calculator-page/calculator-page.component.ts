import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.css']
})
export class CalculatorPageComponent implements OnInit {

  number: number;
  displayResult: string;
  operation: string;
  firstNumber: number;
  result: number;
  resultButton: string;
  secondNumber: number;
  commandOperation: string;
  newOperation: string;


  constructor(private router: Router) {
    this.displayResult = '';
    this.operation = '';
    this.result = 0;
    this.newOperation = '';
  }

  onNumberButtonClick(e) {
    this.number = e.target.innerText;
    this.displayResult += +this.number;
    if (this.newOperation === '') {
      this.firstNumber = +this.displayResult;
    } else if (this.newOperation !== '') {
      this.secondNumber = +this.displayResult;
    }
  }

  onOperationButtonClick(e) {
    this.operation = e.target.innerText;
    this.newOperation = this.operation;
    this.displayResult = '';
  }

  onResultButtonClick(e) {
    this.resultButton = e.target.innerText;
    if (this.newOperation === '+') {
      this.result = this.firstNumber + this.secondNumber;
    } else if (this.newOperation === '-') {
      this.result = this.firstNumber - this.secondNumber;
    } else if (this.newOperation === '*') {
      this.result = this.firstNumber * this.secondNumber;
    } else if (this.newOperation === '÷') {
      this.result = this.firstNumber / this.secondNumber;
      if (this.result === Infinity) {
        alert('Warning!can not be divided by zero!');
        this.result = 0;
      }
    }
    this.displayResult = String(this.result);
  }

  onCommandOperationButtonClick(e) {
    this.commandOperation = e.target.innerText;
    if (this.commandOperation === 'AC') {
      this.displayResult = '';
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.newOperation = '';
    } else if (this.commandOperation === ',') {
      if (this.displayResult !== '') {
        this.displayResult = this.displayResult + ',';
        this.firstNumber = +this.displayResult;
      }
      console.log('this button do not work!');
    } else if (this.commandOperation === '%') {
      this.displayResult = String(+this.displayResult / 100);
      console.log('this button do not work!');
    } else if (this.commandOperation === '±') {
      this.displayResult = String(-this.firstNumber);
      console.log('this button do not work!');
    }
  }

  onBeckToHomePage() {
    this.router.navigate(['/']);
    // console.log('back to home menu');
  }

  ngOnInit() {
  }
}




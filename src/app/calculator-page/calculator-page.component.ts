import {Component, OnInit} from '@angular/core';

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
  secondNumber: number;
  newOperations: string;
  commandOperation: string;


  constructor() {
    this.displayResult = '';
    this.newOperations = '';
  }

  onNumberButtonClick(e) {
    this.number = e.target.innerText;
    this.displayResult += this.number;
    this.firstNumber = +this.displayResult;
  }

  onOperationClick(e) {
    this.operation = e.target.innerText;
    if (this.operation === '+') {
      this.displayResult = '';
      this.secondNumber = +this.number;
    } else if (this.operation === '=') {
      this.result = this.firstNumber + this.secondNumber;
      this.displayResult = String(this.result);
      console.log(this.result);
      console.log(this.firstNumber);
      console.log(this.secondNumber);
    }
  }

  onCommandOperation(e) {
    this.commandOperation = e.target.innerText;
    if (this.commandOperation === 'AC') {
      this.displayResult = '';
      this.firstNumber = 0;
      this.secondNumber = 0;
      console.log(this.commandOperation);
    }
  }

  ngOnInit() {
  }

}

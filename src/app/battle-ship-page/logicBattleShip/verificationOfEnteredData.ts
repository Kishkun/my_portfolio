import {Logic} from './logic';
import {EventEmitter} from '@angular/core';

export class VerificationOfEnteredData {
  guesses: number;
  boardSize: number;
  logic: Logic;
  message: EventEmitter<string>;

  constructor() {
    this.guesses = 0; // number of click
    this.boardSize = 7;
    this.logic = new Logic();
    this.message = new EventEmitter<string>();
  }

  processGuess(guess) {
    const location = this.parseGuess(guess);
    if (location) {
      this.guesses++; // add number of click
      const hit = this.logic.fire(location); // passing the checked and transformed
      // coordinates to the model object that returns true or false
      if (hit && (this.logic.shipsSunk === this.logic.numShips)) {
        this.logic.displayMessage = 'You sank all my battleships, in ' +
          this.guesses + ' guesses'; // the end game and view message
        this.message.emit(this.logic.displayMessage);
      }
    }
  }

  parseGuess(guess) { // checks, converts, and passes data to the processGuess property
    const alphaBet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    if (guess === null || guess.length !== 2) {
      alert('Oops, please enter a letter and a number on the board.');
    } else {
      const firstChar = guess.charAt(0);
      const row = alphaBet.indexOf(firstChar); // convert the letter to a number
      const column = guess.charAt(1);
      if (isNaN(row) || isNaN(column)) {
        alert('Oops, that isn"t on the board.');
      } else if (row < 0 || row >= this.boardSize ||
        column < 0 || column >= this.boardSize) {
        alert('Oops, that"s off the board!');
      } else {
        return row + column; // after verification, we return the coordinate entered by the user
      }
    }
    return null;
  }
}

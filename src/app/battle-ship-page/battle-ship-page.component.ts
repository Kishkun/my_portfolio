import { Component, OnInit } from '@angular/core';
import { GenerateShips } from './logicBattleShip/generate';
import { VerificationOfEnteredData } from './logicBattleShip/verificationOfEnteredData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-battle-ship-page',
  templateUrl: './battle-ship-page.component.html',
  styleUrls: ['./battle-ship-page.component.css']
})
export class BattleShipPageComponent implements OnInit {


  verifications: VerificationOfEnteredData;
  displayHit: string;
  displayMiss: string;
  displayMessage: string;
  table: Array<Array<string>>;
  columns: Array<string>;

  constructor(private router: Router) {
    this.verifications = new VerificationOfEnteredData();
    this.table = [];
    this.columns = [];

  }

  ngOnInit() {
    const generate = new GenerateShips();
    generate.generateShipLocations();
    // make emitter
    this.verifications.logic.changeDisplay.subscribe(this._callbackOfSubscribe());
    this.verifications.message.subscribe(this._callbackOfSubscribeForGettingMessage());
    // generate matrix
    const n = 7, m = 7;
    for (let i = 0; i < m; i++) {
      this.table[i] = [];
      for (let j = 0; j < n; j++) {
        this.table[i][j] = '';
      }
    }
  }

  private _callbackOfSubscribe() {
    return (display) => {
      this.displayHit = display.displayHit;
      if (this.displayHit !== undefined && this.displayHit !== '') {
        const i = +this.displayHit[0];
        const k = +this.displayHit[1];
        this.table[i][k] = 'hit';
      }
      this.displayMiss = display.displayMiss;
      if (this.displayMiss !== undefined && this.displayMiss !== '') {
        const j = +this.displayMiss[0];
        const c = +this.displayMiss[1];
        this.table[j][c] = 'miss';
      }
      this.displayMessage = display.displayMessage;
    };
  }

  private _callbackOfSubscribeForGettingMessage() {
    return (message) => {
      this.displayMessage = message;
    };
  }

  handleFireButton(guess) {
    guess = guess.toUpperCase();
    this.verifications.processGuess(guess);
  }
  onBeckToHomePage() {
    this.router.navigate(['/']);
    // console.log('back to home page');
  }

}

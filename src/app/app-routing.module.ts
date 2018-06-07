import { Routes, RouterModule } from '@angular/router';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { SliderPageComponent } from './slider-page/slider-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import {BattleShipPageComponent} from './battle-ship-page/battle-ship-page.component';

const appRoutes: Routes = [
  { path: 'battleShip', component: BattleShipPageComponent},
  { path: 'calculator', component: CalculatorPageComponent },
  { path: 'slider', component: SliderPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {}

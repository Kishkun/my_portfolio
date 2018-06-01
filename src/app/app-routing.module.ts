import { Routes, RouterModule } from '@angular/router';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { SliderPageComponent } from './slider-page/slider-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
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

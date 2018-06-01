import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderPageComponent } from './slider-page/slider-page.component';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SliderPageComponent,
    CalculatorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CarouselamosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

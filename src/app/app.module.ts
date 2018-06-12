import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderPageComponent } from './slider-page/slider-page.component';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BattleShipPageComponent } from './battle-ship-page/battle-ship-page.component';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';
import { TaskService } from './services/task.service';
import {TaskItemComponent} from './to-do-page/task-item/task-item.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SliderPageComponent,
    CalculatorPageComponent,
    BattleShipPageComponent,
    ToDoPageComponent,
    TaskItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2CarouselamosModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

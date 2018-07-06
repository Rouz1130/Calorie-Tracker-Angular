import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatCheckbox} from '@angular/material';

import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { NewComponent } from './new/new.component';
import { CompletenessPipe } from './completeness.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    NewMealComponent,
    NewComponent,
    CompletenessPipe
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

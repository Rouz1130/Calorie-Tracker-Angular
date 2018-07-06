import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatCheckbox} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { NewMealComponent } from './new-meal/new-meal.component';

import { CompletenessPipe } from './completeness.pipe';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { MealListComponent } from './meal-list/meal-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    NewMealComponent,
    CompletenessPipe,
    EditMealComponent,
    MealListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule,
  MatToolbarModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule
}
  from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { NewMealComponent } from './new-meal/new-meal.component';

import { CompletenessPipe } from './completeness.pipe';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { MealListComponent } from './meal-list/meal-list.component';

import { ToobarMultirowComponent } from './toobar-multirow/toobar-multirow.component';


@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    NewMealComponent,
    CompletenessPipe,
    EditMealComponent,
    MealListComponent,
    ToobarMultirowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

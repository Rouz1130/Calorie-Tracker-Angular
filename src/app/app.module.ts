import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MyMaterialModule } from './material.module';

// Components 
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { MealListComponent } from './meal-list/meal-list.component'
import { ToobarMultirowComponent } from './toobar-multirow/toobar-multirow.component';

import { CompletenessPipe } from './completeness.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    NewMealComponent,
    CompletenessPipe,
    EditMealComponent,
    MealListComponent,
    ToobarMultirowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MyMaterialModule } from './material.module';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// Components 
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { MealListComponent } from './meal-list/meal-list.component'
import { ToobarMultirowComponent } from './toobar-multirow/toobar-multirow.component';

import { CompletenessPipe } from './completeness.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

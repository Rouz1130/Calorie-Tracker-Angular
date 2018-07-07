import { Component, EventEmitter, Output } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.scss']
})
export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, description: string, calories: number) {
  let newMealToAdd: Meal = new Meal (name, description, calories);
  this.newMealSender.emit(newMealToAdd);

  }
}

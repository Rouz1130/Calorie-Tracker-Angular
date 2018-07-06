import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent {
  calorieIntake = new FormControl();
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
 selectedCompleteness: string = "notDone";

  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}

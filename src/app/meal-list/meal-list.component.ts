import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  selectedCompleteness: string = "notDone";


  onChange(optionsForMenu) {
    this.selectedCompleteness = optionsForMenu;
    console.log('this.selectedCompletness');
  } 

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}

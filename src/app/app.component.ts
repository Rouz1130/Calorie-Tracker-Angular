import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("Hamburger", "foodDescription1", 498),
    new Meal("Pizza slice", "foodDescription2", 499),
    new Meal("Bacon & eggs", "foodDescription3", 501),
    new Meal("thai food", "foodDescription4", 502),
  ];

  selectedMeal: Meal = null;

  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

}

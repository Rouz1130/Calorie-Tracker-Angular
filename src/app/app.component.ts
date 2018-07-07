import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedMeal: Meal = null;

  masterMealList: Meal[] = [
    new Meal("Apple-Cinnamon Quinoa Bowl", "Grains, apples, cinnamin", 307),
    new Meal("Pasta", "Zucchini Noodles with Avocado Pesto & Shrimp ", 515),
    new Meal("Balsamic Chicken", "Paprika, rosemary chicken", 280),
    new Meal("Mac and Cheese", "King ranh and Chicken", 650),
  ];

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

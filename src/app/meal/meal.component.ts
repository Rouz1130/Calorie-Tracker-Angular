import { Component, Input } from '@angular/core';
import { Meal } from '../meal.model';


@Component({
  selector: 'meal-display',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent {
  @Input() meal: Meal;
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss']
})
export class EditMealComponent {
  panelOpenState = false;
  
  constructor() {}


  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  
  
  doneClicked() {
    this.doneClickedSender.emit();
  }

}


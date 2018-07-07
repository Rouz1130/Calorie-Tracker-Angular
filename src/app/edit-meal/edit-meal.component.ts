import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Meal } from '../meal.model';


@Component({
  selector: 'edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss']
})
export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }


  }


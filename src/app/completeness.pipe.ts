import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'completeness',
  pure: false
})
export class CompletenessPipe implements PipeTransform {

  transform(input: Meal[], desiredCompleteness) {

    let output: Meal[] = [];
    if (desiredCompleteness === "isUnder500") {
      for (let i = 0; i < input.length; i++) {
        // if (input[i].done === false) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isOver500") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

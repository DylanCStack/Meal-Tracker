import { Injectable } from '@angular/core';
import { Meal } from './meal.model';
import { MEALS } from './mock-meals';


@Injectable()
export class MealService {
  meals: Meal[] = MEALS;
  constructor() { }

  getMeals(){
    return this.meals;
  }
}

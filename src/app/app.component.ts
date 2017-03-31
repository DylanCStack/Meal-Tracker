import { Component } from '@angular/core';
import { Meal } from './meal.model';
// import { MEALS } from './mock-meals';
import { MealService } from './meal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MealService]
})
export class AppComponent {
constructor(public MealService: MealService){}

  meals: Meal[] = this.MealService.getMeals();
  title = 'Meal Tracker';

}

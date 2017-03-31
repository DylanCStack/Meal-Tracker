import { Component } from '@angular/core';
import { Meal } from './meal.model';
// import { MEALS } from './mock-meals';
import { MealService } from './meal.service';
import { NewMealComponent } from './new-meal/new-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MealService]
})
export class AppComponent {
constructor(public MealService: MealService){}

  selectedMeal: Meal = null;
  addingMeal:boolean = false;

  meals: Meal[] = this.MealService.getMeals();
  title = 'Meal Tracker';
  calorieFilter:boolean = true;

  filterMeals(bool){
    this.calorieFilter = bool;
  }

  newMeal(){
    this.addingMeal=true;
  }
  saveMeal(meal){
    this.meals.push(meal);
    this.addingMeal=false;
  }

  editingMeal(meal){
    this.selectedMeal=meal;
  }
  saveChanges(meal){
    this.selectedMeal=null;
  }

  deleteMeal(meal){
    if(confirm("Are you sure you want to untrack this meal?")){
      this.meals = this.meals.filter(function(thisMeal){
        if(meal === thisMeal){
          return false;
        } else {
          return true;
        }
      });
    }
  }

}

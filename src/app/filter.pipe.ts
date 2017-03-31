import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(meals, calories, LtGt): any {
    console.log(meals);
    console.log(calories);
    console.log(LtGt)
    if(calories === undefined){
      return meals;
    }

    if(LtGt){
      console.log("filtering less than");
      return meals.filter(function(meal){
        if(meal.calories < calories){
          return true;
        }
      });
    } else {
      console.log("filtering greater than");
      return meals.filter(function(meal){
        if(meal.calories > calories){
          return true;
        }
      })
    }
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';
@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent implements OnInit {
  @Input() addingMeal:boolean;
  @Output() newMealSender = new EventEmitter();
  divClass:string= "alert alert-success";

  constructor() { }

  ngOnInit() {
  }
  updateClass(cals){
    var htmlClass:string = "alert alert-";
    var mod:string = "success";
    if(cals > 200 && cals<500){
      mod = "info";
    } else if(cals > 500 && cals<1000) {
      mod = "warning";
    } else if(cals > 1000){
      mod="danger";
    }
    this.divClass = htmlClass + mod;
  }

  trackMeal(name, details, calories){
    this.newMealSender.emit(new Meal(name, details, calories, Date.now()));
  }

}

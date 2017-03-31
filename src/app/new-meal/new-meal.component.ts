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

  constructor() { }

  ngOnInit() {
  }
  
  trackMeal(name, details, calories){
    this.newMealSender.emit(new Meal(name, details, calories, Date.now()));
  }

}

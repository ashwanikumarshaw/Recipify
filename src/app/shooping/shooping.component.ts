import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shooping',
  templateUrl: './shooping.component.html',
  styleUrls: ['./shooping.component.css']
})
export class ShoopingComponent implements OnInit {

  ingredients : Ingredient[]= [
    new Ingredient('apples',5),
    new Ingredient('banana',12)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

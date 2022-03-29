import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('pizza','roti+vegi+cheese','https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900')
    
    ,new Recipe('pizza','roti+vegi+cheese','https://e7.pngegg.com/pngimages/606/648/png-clipart-california-style-pizza-sicilian-pizza-chrono-pizza-fast-food-pizza-menu-food-recipe.png')
  ]
  constructor() {
    console.log('recipe')
   }

  ngOnInit(): void {
  }

}

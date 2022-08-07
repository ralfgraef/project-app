import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is the description', 'https://aheadofourthyme.com/wp-content/uploads/2022/04/air-fryer-salmon-recipe-3-600x556.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

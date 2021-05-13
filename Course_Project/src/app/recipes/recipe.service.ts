import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe ('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/12/04/02/26/vegetables-1880980_1280.jpg'),
    new Recipe ('Another Test Recipe', 'This is simply a test', 'https://pixnio.com/free-images/2020/07/23/2020-07-23-12-09-27-800x1200.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}



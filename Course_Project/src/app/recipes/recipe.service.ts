import { Subject } from 'rxjs/Subject';

import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe ('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/12/04/02/26/vegetables-1880980_1280.jpg', [
      new Ingredient('Veggie Burger', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe ('Another Test Recipe', 'This is simply a test', 'https://pixnio.com/free-images/2020/07/23/2020-07-23-12-09-27-800x1200.jpg',
    [
      new Ingredient('Strawberries', 7),
      new Ingredient('Kiwis', 2)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
    }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

}



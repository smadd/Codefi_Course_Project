import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/12/04/02/26/vegetables-1880980_1280.jpg'),
    new Recipe ('A Test Recipe', 'This is simply a test', 'https://pixnio.com/free-images/2020/07/23/2020-07-23-12-09-27-800x1200.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
}

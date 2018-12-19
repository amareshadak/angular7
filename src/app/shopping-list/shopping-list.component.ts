import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[]=new Array(
  new Ingredient('Apple',5),
  new Ingredient('Tometoes',15),
  new Ingredient('Orenge',25)
);

  constructor() { }

  ngOnInit() {
  }

}

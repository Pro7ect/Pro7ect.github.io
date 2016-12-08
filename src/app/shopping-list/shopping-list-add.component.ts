import {
  Component, OnInit, Input, OnChanges, EventEmitter, Output, ViewChild, AfterViewInit,
  ViewChildren, QueryList, ElementRef, ViewContainerRef
} from '@angular/core';
import {ShoppingListService} from "./shopping-list.service";
import {Ingredient} from "../shared/ingredient";
import {InputDirective} from "../input.directive";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges, AfterViewInit{
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;

  @ViewChildren('inputContainer') myChildComponent: QueryList<HTMLElement>;

  constructor(private sls: ShoppingListService) {}

  ngAfterViewInit(){
    this.myChildComponent;
  }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }

    console.log(this.item)
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);

    if (!this.isAdd) {
      this.sls.editItem(this.item, newIngredient);
      this.onClear();
    } else {
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}

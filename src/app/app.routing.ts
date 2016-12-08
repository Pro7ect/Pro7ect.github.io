import {Routes, RouterModule} from "@angular/router";

import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RECIPE_ROUTES} from "./recipes/recipes.routes";
import {HomeComponent} from "./home.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

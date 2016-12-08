import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {DropdownDirective} from "./dropdown.directive";

@NgModule({
  declarations: [DropdownDirective, HomeComponent],
  imports: [],
  exports: [DropdownDirective],
  providers: [],
})
export class CoreModule {
}

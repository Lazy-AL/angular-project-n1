import {Directive, HostListener} from '@angular/core';

@Directive({
  selector:'[appDropDown]'
})
export class DropdownDirective {
  @HostListener('click') toggleOpen(){

  }
}

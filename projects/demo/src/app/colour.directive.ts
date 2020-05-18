import { Directive, ElementRef } from '@angular/core';
import { NgOnInit } from 'ng-glucose';

@Directive({
  selector: '[appColor]',
})
export class ColourDirective {
  constructor(private el: ElementRef) {}

  @NgOnInit()
  private _setBackgroundColour(): void {
    this.el.nativeElement.style.backgroundColor = 'black';
  }

  @NgOnInit()
  private _setFontColour(): void {
    this.el.nativeElement.style.color = 'white';
  }
}

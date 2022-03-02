import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appColorchanger]',
})
export class ColorchangerDirective {
  // @HostBinding('style.color') color;
  @HostBinding('style.backgroundColor') bgColor;

  constructor(private eleRef: ElementRef) {}

  // @HostListener('click')
  // changeBackgoundblue() {
  //   console.log('red');
  //   this.eleRef.nativeElement.style.backgroundColor = 'blue';
  // }

  // @HostListener('mouseover')
  // changeBackgound() {
  //   console.log('red');
  //   this.eleRef.nativeElement.style.backgroundColor = 'red';
  // }
  // @HostListener('mouseout')
  // changeBackgound2() {
  //   console.log('red');
  //   this.eleRef.nativeElement.style.backgroundColor = 'white';
  // }

  // @HostListener('click')
  // changeBackgoundblue() {
  //   console.log('red');
  //   this.eleRef.nativeElement.style.backgroundColor = 'blue';
  // }

  @HostListener('mouseover')
  changeBackgound() {
    // console.log('red');
    this.bgColor = 'yellow';
  }

  @HostListener('mouseout')
  changeBackgound2() {
    // console.log('red');
    this.bgColor = 'green';
  }
}

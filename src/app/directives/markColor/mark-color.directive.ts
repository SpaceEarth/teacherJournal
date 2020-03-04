import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMarkColor]'
})
export class MarkColorDirective implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  public ngAfterViewInit(): void {
    const markEl: HTMLElement = this.el.nativeElement.querySelector('.averageMark');
    const averageMark: number = parseFloat(markEl.innerText);

    if (averageMark < 5) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#004080');
    } else if (averageMark >= 5) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#334d00');
    }
  }

}

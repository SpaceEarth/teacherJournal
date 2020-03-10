import { Directive, ElementRef, Renderer2, AfterViewInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMarkColor]'
})
export class MarkColorDirective {
  @Input('appMarkColor')
  public number: number | null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  public onMouseEneter(): void {
    if (typeof this.number !== 'number') {
      return;
    }
    const averageMark: number = this.number;

    if (averageMark < 5) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#004080');
    } else if (averageMark >= 5) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#334d00');
    }
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }

}

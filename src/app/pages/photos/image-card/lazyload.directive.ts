import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import { lazySizes } from 'lazysizes';


@Directive({
  selector: '[ngxLazyload]'
})
export class LazyloadDirective implements OnInit {
  public tempImage: string = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  @Input('lazyload') imgSrc: string;
  public img;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.img = require(`./../../../../assets/images/${this.imgSrc}`);
    this.initLazyLoading();
    this.setAttributes();
  }
  initLazyLoading() {
    if (lazySizes) {
      lazySizes.init();
    }
  }
  setAttributes() {
    this.renderer.addClass(this.el.nativeElement, 'lazyload');
    if (this.el.nativeElement.localName === 'img') {
      this.setImgSrc();
    } else {
      this.setElementBackgroundImage();
    }
  }
  setImgSrc() {
    this.renderer.setAttribute(this.el.nativeElement, 'data-src', this.img);
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.tempImage);
  }
  setElementBackgroundImage() {
    this.renderer.setAttribute(this.el.nativeElement, 'data-bg', this.img);
    this.renderer.setStyle(this.el.nativeElement, 'background-image', `url(${this.tempImage})`);
  }

}

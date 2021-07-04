import { Component, ElementRef, HostListener, ViewChild, OnInit, Input } from '@angular/core';
import { slideAnimation } from '../uitilities/slide.animation';
import { ImageElement } from './images.model';


@Component({
  selector: 'bashgo-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [slideAnimation]
})
export class BannerComponent implements OnInit {
  constructor() { }
  @Input("slideImages") slideImages: ImageElement[];
  @Input("bannerImage") bannerImage: string;
  @Input("bannerCaption") bannerCaption: string;
  @ViewChild('sliders') sliders: ElementRef;
  sliderHeight: number;
  currentIndex: number = 0;
  interval: any;
  bannerSlides: ImageElement[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.reSizeElement();
    }, 1000);
    this.startTimer();
    this.getSliderImages();
  }

  @HostListener('window:resize', ['$event'])
  reSizeElement() {
    if (!this.bannerImage)
      this.sliderHeight = this.sliders.nativeElement.offsetHeight;
  }

  getSliderImages() {
    if (!this.bannerImage)
      this.bannerSlides.push(...this.slideImages);
  }

  preloadImages() {
    this.bannerSlides.forEach(slide => {
      (new Image()).src = slide.url;
    })
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index: number) {
    return this.currentIndex === index;
  }

  nextSlide() {
    this.resetTimer();
    this.currentIndex = (this.currentIndex < this.bannerSlides.length - 1) ? ++this.currentIndex : 0;
    this.startTimer();
  }

  prevSlide() {
    this.resetTimer();
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.bannerSlides.length - 1;
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  resetTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { GalleryImageElement } from '../../shared/models/gallery-image.model';

@Component({
  selector: 'bashgo-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {

  bannerImage: string = 'gallery-image.jpg';
  gallery: GalleryImageElement[] = [
    { id: "1", src: "/assets/images/gallery/1-S-Gas-Compressor.jpg", previewUrl: "/assets/images/gallery/1-S-Gas-Compressor.jpg", caption: "S Gas Compressor" },
    { id: "2", src: "/assets/images/gallery/2-Centac-Compressor.jpg", previewUrl: "/assets/images/gallery/2-Centac-Compressor.jpg", caption: "Centac Compressor" },
    { id: "3", src: "/assets/images/gallery/3-Blower.jpg", previewUrl: "/assets/images/gallery/3-Blower.jpg", caption: "Blower" },
    { id: "4", src: "/assets/images/gallery/4-Crane-Maintenance-2.jpg", previewUrl: "/assets/images/gallery/4-Crane-Maintenance-2.jpg", caption: "Crane Maintenance-2" },
    { id: "5", src: "/assets/images/gallery/5-Cooling-Gas-Compressor.jpg", previewUrl: "/assets/images/gallery/5-Cooling-Gas-Compressor.jpg", caption: "Cooling Gas Compressor" },
    { id: "6", src: "/assets/images/gallery/6-Gear-Box-Overhauling.jpg", previewUrl: "/assets/images/gallery/6-Gear-Box-Overhauling.jpg", caption: "Gear Box Overhauling" },
    { id: "7", src: "/assets/images/gallery/7-Pipe-Fabrication.jpg", previewUrl: "/assets/images/gallery/7-Pipe-Fabrication.jpg", caption: "Pipe Fabrication" },
    { id: "8", src: "/assets/images/gallery/8-Gas-Booster.jpg", previewUrl: "/assets/images/gallery/8-Gas-Booster.jpg", caption: "Gas Booster" },
    { id: "9", src: "/assets/images/gallery/9-Insullation.jpg", previewUrl: "/assets/images/gallery/9-Insullation.jpg", caption: "Insullation" },
    { id: "10", src: "/assets/images/gallery/10-Valve-Service.jpg", previewUrl: "/assets/images/gallery/10-Valve-Service.jpg", caption: "Valve Service" },
    { id: "11", src: "/assets/images/gallery/11-Mechanical-Seal.jpg", previewUrl: "/assets/images/gallery/11-Mechanical-Seal.jpg", caption: "Mechanical Seal" },
    { id: "12", src: "/assets/images/gallery/12-Water-Treatment.jpg", previewUrl: "/assets/images/gallery/12-Water-Treatment.jpg", caption: "Water Treatment" },
    { id: "13", src: "/assets/images/gallery/13-Crane-Maintenance.jpg", previewUrl: "/assets/images/gallery/13-Crane-Maintenance.jpg", caption: "Crane Maintenance" },
    { id: "14", src: "/assets/images/gallery/14-Solar-Plant-Erection.jpg", previewUrl: "/assets/images/gallery/14-Solar-Plant-Erection.jpg", caption: "Solar Plant Erection" },
    { id: "15", src: "/assets/images/gallery/15-Tower-Erection.jpg", previewUrl: "/assets/images/gallery/15-Tower-Erection.jpg", caption: "Tower Erection" },
    { id: "16", src: "/assets/images/gallery/16-Plant-Audit.jpg", previewUrl: "/assets/images/gallery/16-Plant-Audit.jpg", caption: "Plant Audit" },
    { id: "17", src: "/assets/images/gallery/17-Interview.jpg", previewUrl: "/assets/images/gallery/17-Interview.jpg", caption: "Interview" },
    { id: "18", src: "/assets/images/gallery/18-Training.jpg", previewUrl: "/assets/images/gallery/18-Training.jpg", caption: "Training" }
  ];
  currentIndex: number = 0;
  isLighBoxOpen: boolean = false;
  isCurrentSlideIndex: any;

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    if (this.currentIndex < this.gallery.length - 1) {
      ++this.currentIndex;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      --this.currentIndex;
    }
  }

  openLightBox(index) {
    this.isLighBoxOpen = true;
    this.currentIndex = index;
  }

}

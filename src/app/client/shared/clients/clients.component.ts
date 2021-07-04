import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ClientElements } from './clients.models';

@Component({
  selector: 'bashgo-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {

  constructor() { }

  clientLogos: ClientElements[] = [
    { id: "1", src: "/assets/images/clients/1.RIL.jpg", caption: "" },
    { id: "2", src: "/assets/images/clients/2.JSW.jpg", caption: "" },
    { id: "3", src: "/assets/images/clients/3.Pfizer.jpg", caption: "" },
    { id: "4", src: "/assets/images/clients/4.Cairn.jpg", caption: "" },
    { id: "5", src: "/assets/images/clients/5.Kumudam.jpg", caption: "" },
    { id: "6", src: "/assets/images/clients/6.Hardy.jpg", caption: "" },
    { id: "7", src: "/assets/images/clients/7.L-T-Shipbuilding.jpg", caption: "" },
    { id: "8", src: "/assets/images/clients/8.BMM.jpg", caption: "" },
    { id: "9", src: "/assets/images/clients/9.IHI.jpg", caption: "" },
    { id: "10", src: "/assets/images/clients/10.Pfizer.jpg", caption: "" },
    { id: "11", src: "/assets/images/clients/11.PEC.jpg", caption: "" },
    { id: "12", src: "/assets/images/clients/12.Rane.jpg", caption: "" },
    { id: "13", src: "/assets/images/clients/13.Reliance-Comm.jpg", caption: "" },
    { id: "14", src: "/assets/images/clients/14.TNPL.jpg", caption: "" },
    { id: "15", src: "/assets/images/clients/15.NOCL.jpg", caption: "" },
    { id: "16", src: "/assets/images/clients/16.Comstar.jpg", caption: "" },
    { id: "17", src: "/assets/images/clients/17.Mannai.jpg", caption: "" },
    { id: "18", src: "/assets/images/clients/18.Perfect.jpg", caption: "" },
    { id: "19", src: "/assets/images/clients/19.WIL.jpg", caption: "" },
    { id: "20", src: "/assets/images/clients/20.Sulzer.jpg", caption: "" },
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: true
  }


  ngOnInit(): void {

  }
}

import { Component, OnInit } from '@angular/core';
import { ImageElement } from '../../shared/banner/images.model';

@Component({
  selector: 'bashgo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sliderImages: ImageElement[] = [
    { id: "1", url: "home-image1.jpg", caption: "" },
    { id: "2", url: "home-image2.jpg", caption: "" },
    { id: "3", url: "home-image3.jpg", caption: "" },
    { id: "4", url: "home-image4.jpg", caption: "" }
  ];

  serviceManagements: any[] = [
    { id: '1', title: 'Operation & Maintenance Management', description: 'BASHGO is one of the industry leaders in Operation & Maintenance service provider. We made this solid reputation through a multitude of projects in various sectors, spanning from refinery, oil & gas, petrochemical, pharmaceutical, power, steel etc.,', linkTo: 'operation-maintenance', icon: "operation" },
    { id: '2', title: 'Asset & Material Management', description: 'BASHGO helps customer optimise material management CMMS systems such as asset & material management, reducing material spending significantly. Our deep understand of daily operation in asset-intensive industries, of equipment and maintenance procedures helps us identify optimisations that reduce excess stock and specify alternative spare parts', linkTo: 'asset-material', icon: "assets" },
    { id: '3', title: 'Digital Training', description: 'Ascertaining your knowledge is a critical part of learning.  Out training programs provide a space to practice with exercises, virtual environments and more. Learning on CBT’s transforms how you think and what you can do, and translates directly into the real world immediately apply your new skills in the context of your job', linkTo: 'digital-training', icon: "training" },
    { id: '4', title: 'Manpower Outsourcing', description: 'We pride ourselves on listening to our client needs and working closely with them to find the right person on right job. We pride ourselves on our ethical, handcrafted approach. This means that we balance everything we do across scalable workforce solutions with what is right for our client', linkTo: 'manpower-outsourcing', icon: "manpower" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

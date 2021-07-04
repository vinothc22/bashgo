import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bashgo-digital-training',
  templateUrl: './digital-training.component.html',
  styleUrls: ['./digital-training.component.scss']
})
export class DigitalTrainingComponent implements OnInit {

  bannerImage: any = 'digital-training.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bashgo-operation-maintenance',
  templateUrl: './operation-maintenance.component.html',
  styleUrls: ['./operation-maintenance.component.scss']
})
export class OperationMaintenanceComponent implements OnInit {

  bannerImage: any = 'operation-maintenance.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}

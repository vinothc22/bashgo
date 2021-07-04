import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bashgo-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  title: string = 'Bashgo'
  constructor() { }

  ngOnInit(): void {
  }

}

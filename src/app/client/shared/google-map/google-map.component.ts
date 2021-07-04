import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bashgo-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  lat = 13.086061998040119;
  long = 80.22516131194868;
  zoom = 4;
  markers = [
    {
      lat: 13.086061998040119,
      lng: 80.22516131194868,
      label: "<b>Bashgo Maintenance Services Private Limited</b><br />No 3, B1-rams, D-block, 2nd Avenue Extension, Anna Nagar East, Anna Nagar East, Chennai, Tamil Nadu 600102."
    },
    {
      lat: 1.276000132005507,
      lng: 103.8458527119058,
      label: "<b>BASHGO MAINTENANCE SERVICE(S) PTE. LTD</b><br />10, Anson Road #33-17, International Plaza, Singapore - 079903."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

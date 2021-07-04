import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bashgo-asset-material',
  templateUrl: './asset-material.component.html',
  styleUrls: ['./asset-material.component.scss']
})
export class AssetMaterialComponent implements OnInit {

  bannerImage: any = 'asset-material.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}

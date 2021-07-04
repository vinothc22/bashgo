import { DOCUMENT } from '@angular/common';
import { Component, OnInit, HostListener, Inject, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

const menuConfig = [
  { "id": "1", "text": "Home", "icon": "", "linkTo": "home" },
  { "id": "2", "text": "About Us", "icon": "", "linkTo": "about-us" },
  {
    "id": "3", "text": "Services", "icon": "", "linkTo": "services", "subMenu": [
      { "id": "1", "text": "Operation & Maintenance", "icon": "", "linkTo": "operation-maintenance" },
      { "id": "2", "text": "Asset & Material Management", "icon": "", "linkTo": "asset-material" },
      { "id": "3", "text": "Digitial Training", "icon": "", "linkTo": "digital-training" },
      { "id": "4", "text": "Manpower Outsourcing", "icon": "", "linkTo": "manpower-outsourcing" },
    ]
  },
  { "id": "4", "text": "Clientele", "icon": "", "linkTo": "clientele" },
  { "id": "5", "text": "Gallery", "icon": "", "linkTo": "gallery" },
  { "id": "6", "text": "Career", "icon": "", "linkTo": "career" },
  { "id": "7", "text": "Contact us", "icon": "", "linkTo": "contact-us" }
];

@Component({
  selector: 'bashgo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList: Array<any>;
  isSticky: boolean = false;
  setToggleMenu: boolean = false;
  @ViewChild("toggleButton") toggleButton: ElementRef;
  @ViewChild("menu") menu: ElementRef;

  constructor(private renderer: Renderer2, private router: Router, @Inject(DOCUMENT) document) {
    this.renderer.listen("window", "click", (e: Event) => {
      if (!this.toggleButton.nativeElement.contains(e.target) && !this.menu.nativeElement.contains(e.target)) {
        this.setToggleMenu = false;
      }
    })
  }

  ngOnInit(): void {
    this.menuList = menuConfig;
  }

  @HostListener('window:scroll', ['$event'])
  stickyHeader() {
    this.isSticky = (window.pageYOffset > 60) ? true : false;
  }

  toggleResponsiveMenu() {
    this.setToggleMenu = !this.setToggleMenu;
  }

  getQuote() {
    this.router.navigate(["/contact-us"]);
    setTimeout(() => {
      let contactID = document.getElementById("contactUs") as HTMLElement;
      window.scrollTo(0, contactID.offsetTop - 100);
    }, 1000);
  }

}

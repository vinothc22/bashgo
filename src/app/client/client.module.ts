import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ClienteleComponent } from './pages/clientele/clientele.component';
import { CareerComponent } from './pages/career/career.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ClientRoutingModule } from './client-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { TruncatePipe } from './shared/uitilities/truncate.pipe';
import { ClientsComponent } from './shared/clients/clients.component'

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from './shared/services/form-service.service';
import { OperationMaintenanceComponent } from './pages/services/operation-maintenance/operation-maintenance.component';
import { AssetMaterialComponent } from './pages/services/asset-material/asset-material.component';
import { DigitalTrainingComponent } from './pages/services/digital-training/digital-training.component';
import { ManpowerOutsourcingComponent } from './pages/services/manpower-outsourcing/manpower-outsourcing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GoogleMapComponent } from './shared/google-map/google-map.component';
import { CommonService } from './shared/services/common.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ClientComponent, HomeComponent, AboutComponent, ServicesComponent, ClienteleComponent, CareerComponent, ContactsComponent, HeaderComponent, FooterComponent, BannerComponent, TruncatePipe, ClientsComponent, GalleryComponent, OperationMaintenanceComponent, AssetMaterialComponent, DigitalTrainingComponent, ManpowerOutsourcingComponent, PageNotFoundComponent, GoogleMapComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,

  ],
  providers: [
    FormService,
    CommonService,

  ]
})
export class ClientModule { }

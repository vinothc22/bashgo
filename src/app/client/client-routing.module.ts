import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { AboutComponent } from './pages/about/about.component';
import { CareerComponent } from './pages/career/career.component';
import { ClienteleComponent } from './pages/clientele/clientele.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AssetMaterialComponent } from './pages/services/asset-material/asset-material.component';
import { DigitalTrainingComponent } from './pages/services/digital-training/digital-training.component';
import { ManpowerOutsourcingComponent } from './pages/services/manpower-outsourcing/manpower-outsourcing.component';
import { OperationMaintenanceComponent } from './pages/services/operation-maintenance/operation-maintenance.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "about-us", component: AboutComponent },
      { path: "services", component: ServicesComponent },
      { path: "services/operation-maintenance", component: OperationMaintenanceComponent },
      { path: "services/asset-material", component: AssetMaterialComponent },
      { path: "services/digital-training", component: DigitalTrainingComponent },
      { path: "services/manpower-outsourcing", component: ManpowerOutsourcingComponent },
      { path: "clientele", component: ClienteleComponent },
      { path: "gallery", component: GalleryComponent },
      { path: "career", component: CareerComponent },
      { path: "contact-us", component: ContactsComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

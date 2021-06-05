import { OrderpriceComponent } from './orderprice/orderprice.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClothesDetailsComponent } from './clothes-details/clothes-details.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[{ path: '', component: HomepageComponent},
 { path: 'clothesdetails', component: ClothesDetailsComponent},
 { path: 'contactus', component: ContactusComponent},
 { path: 'orderprice', component: OrderpriceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 64]
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

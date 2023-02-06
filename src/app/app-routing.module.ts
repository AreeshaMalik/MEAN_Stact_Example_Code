import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PakwheelsComponent } from './pakwheels/pakwheels.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardeetsComponent } from './cardeets/cardeets.component';
import { AddcarComponent } from './addcar/addcar.component';
import { UpdateDeetsComponent } from './update-deets/update-deets.component';

const routes: Routes = 
      [    
        { path: '', redirectTo: 'home' , pathMatch: 'full'},
        { path: 'home', component: PakwheelsComponent},
        { path: 'cardetails', component: CardeetsComponent },
        { path: 'addcar', component: AddcarComponent },
        { path: 'updateDeets', component: UpdateDeetsComponent}
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

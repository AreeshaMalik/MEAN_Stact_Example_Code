import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PakwheelsComponent } from './pakwheels/pakwheels.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardeetsComponent } from './cardeets/cardeets.component';
import { CompComponent } from './comp/comp.component';
import { AddcarComponent } from './addcar/addcar.component';
import { UpdateDeetsComponent } from './update-deets/update-deets.component';

@NgModule({
  declarations: [
    AppComponent,
    PakwheelsComponent,
    HeaderComponent,
    FooterComponent,
    CardeetsComponent,
    CompComponent,
    AddcarComponent,
    UpdateDeetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

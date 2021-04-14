/* angular and materials */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

/* user defined */
import { AppComponent } from './app.component';
import { ManifestsComponent } from './manifests/manifests.component';
import { OrdersComponent } from './orders/orders.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
  
@NgModule({
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [ AppComponent, ManifestsComponent, OrdersComponent, VehiclesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

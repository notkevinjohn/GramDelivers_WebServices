/* angular and materials */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
/*import { MatCardHarness } from '@angular/material/card/testing';*/

/* user defined */
import { AppComponent } from './app.component';
import { ManifestsComponent } from './manifests/manifests.component';
import { OrdersComponent } from './orders/orders.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MessagesComponent } from './messages/messages.component';
  
@NgModule({
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
/*    MatCardHarness*/
  ],
  declarations:
  [
    AppComponent,
    ManifestsComponent,
    OrdersComponent,
    VehiclesComponent,
    OrderDetailComponent,
    MessagesComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

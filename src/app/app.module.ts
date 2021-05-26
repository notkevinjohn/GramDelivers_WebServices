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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopupService } from './popup.service';
import { ShapeService } from './shape.service';
/* user defined */
import { AppComponent } from './app.component';
import { ManifestsComponent } from './manifests/manifests.component';
import { OrdersComponent } from './orders/orders.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MapComponent } from './map/map.component';
import { OrderListComponent } from './order-list/order-list.component';

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
    MatDividerModule,
    MatExpansionModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  declarations:
  [
    AppComponent,
    ManifestsComponent,
    OrdersComponent,
    VehiclesComponent,
    OrderDetailComponent,
    MessagesComponent,
    MapComponent,
    OrderListComponent
  ],
  providers: [
    MarkerService,
    PopupService,
    ShapeService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

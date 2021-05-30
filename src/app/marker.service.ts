import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  private appMap: L.map;
  
  constructor(
    private http: HttpClient,
    private popupService: PopupService
  ) { }

  markerMap = new Map();
  
  markerHtmlStyle = `
  background-color: #680E0E;
  width: 3rem;
  height: 3rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`
  
  icon = L.divIcon({
    iconAnchor:   [0, 24],
    popupAnchor:  [0, -36],
    labelAnchor:  [-6, 0],
    className:    "hued-pin",
    html: `<span style="${this.markerHtmlStyle}" />`
});    

  saveMap(map: L.map): void {
    this.appMap = map;
  }
  
  addOrders(orders: Order[]): void {

    console.log(orders.length);
    console.log(orders);
    
    for (var counter = 0; counter < orders.length; counter++){

      const dropLat = orders[counter].requested_dropoff_latitude;
      const dropLon = orders[counter].requested_dropoff_longtiude;
      console.log(dropLat, dropLon);
      const pickLat = orders[counter].requested_pickup_latitude;
      const pickLon = orders[counter].requested_pickup_longtiude;
      console.log(pickLat, pickLon);
      
      const dropoff = L.marker([dropLat, dropLon], {icon: this.icon} ).addTo(this.appMap);
      const pickup = L.marker([pickLat, pickLon], {icon: this.icon} ).addTo(this.appMap);

      /*
       const circle = L.circleMarker([lat, lon], {
	  radius: 9


       	marker.bindPopup(this.popupService.makePopup(c.properties));

       */
    }
  }
}

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

  purpleIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

  redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

  greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

  blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
  
  saveMap(map: L.map): void {
    this.appMap = map;
  }
  
  addOrders(orders: Order[]): void {
    for (var counter = 0; counter < orders.length; counter++){

      const dropLat = orders[counter].requested_dropoff_latitude;
      const dropLon = orders[counter].requested_dropoff_longtiude;
      const pickLat = orders[counter].requested_pickup_latitude;
      const pickLon = orders[counter].requested_pickup_longtiude;
      
      const dropoff = L.marker([dropLat, dropLon], {icon: this.redIcon} ).addTo(this.appMap);
      this.markerMap.set(orders[counter], dropoff);

      const pickup = L.marker([pickLat, pickLon], {icon: this.purpleIcon} ).addTo(this.appMap);
      this.markerMap.set(orders[counter], pickup);

      /*
       const circle = L.circleMarker([lat, lon], {
	  radius: 9

       	marker.bindPopup(this.popupService.makePopup(c.properties));
       */
    }
  }
}

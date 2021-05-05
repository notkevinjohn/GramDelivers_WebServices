import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  orders: string = '/assets/data/orders.geojson';
  
  constructor(
    private http: HttpClient,
    private popupService: PopupService
  ) { }


  navIcon = L.icon({
    iconUrl: 'assets/images/pin.png',
    shadowUrl: 'assets/images/shadow.png',
    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
});    

  
  makeOrderMarkers(map: L.map): void {
    this.http.get(this.orders).subscribe((res: any) => {
      
      for (const c of res.features) {
	const lon = c.geometry.coordinates[0];
	const lat = c.geometry.coordinates[1];
	const circle = L.circleMarker([lat, lon], {
	  radius: 9
	}
	);

	const marker = L.marker([lat, lon], {icon: this.navIcon} ).addTo(map);
	
	marker.bindPopup(this.popupService.makePopup(c.properties));
	
//	circle.addTo(map);
      }
    });
  }
}

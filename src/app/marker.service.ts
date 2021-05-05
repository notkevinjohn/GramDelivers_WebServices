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
    iconRetinaUrl: 'assets/marker-icon-2x.png',
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png',
    iconSize:     [25, 41],
    shadowSize:   [41, 41],
    iconAnchor:   [12, 41],
    popupAnchor:  [1, -34]
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

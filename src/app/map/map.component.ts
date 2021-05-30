import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;
  
  private initMap(): void {
    this.map = L.map('map', {
      center: [42.14068, -71.05716],
      zoom: 9
    });
    
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 5,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
  
  tiles.addTo(this.map);
}

constructor(
  private markerService: MarkerService
) { }

private highlightFeature(e) {
  const layer = e.target;

  layer.setStyle({
    weight: 10,
    opacity: 1.0,
    color: '#DFA612',
    fillOpacity: 1.0,
    fillColor: '#FAE042'
  });
}

private resetFeature(e) {
  const layer = e.target;

  layer.setStyle({
    weight: 3,
    opacity: 0.5,
    color: '#008f68',
    fillOpacity: 0.8,
    fillColor: '#06B65B'
  });
}

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.saveMap(this.map);
  }

}

import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicle: Vehicle = {
    id: 23,
    name: 'pontiac'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}

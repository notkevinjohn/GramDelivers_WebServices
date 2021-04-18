import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VEHICLES } from '../mock-vehicles';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles = VEHICLES;
  
  constructor() { }

  ngOnInit(): void {
  }

}

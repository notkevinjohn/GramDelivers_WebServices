import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order: Order = {
    id: 420,
    name: 'Kevin'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}

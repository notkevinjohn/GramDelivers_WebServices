import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { ORDERS } from '../mock-orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders = ORDERS;
  selectedOrder?: Order;

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }
  
  constructor() { }

  ngOnInit() { }
}

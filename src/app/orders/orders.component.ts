import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  selectedOrder?: Order;

  onSelect(order: Order): void {
    this.selectedOrder = order;
    this.messageService.add(`OrdersComponent: Selected order job_number=${order.job_number}`);
  }

  getOrders(): void {
    this.orderService.getOrders()
    .subscribe(orders => this.orders = orders);
  }
    
  constructor(
    private orderService: OrderService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getOrders();
  }
}

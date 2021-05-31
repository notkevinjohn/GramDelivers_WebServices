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
    this.orderService.select(order);
  }

  getOrders(): void {
    this.orderService.getOrders()
    .subscribe(orders => this.orders = orders);
    this.messageService.add("tsete");
  }
    
  constructor(
    private orderService: OrderService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getOrders();
  }
}

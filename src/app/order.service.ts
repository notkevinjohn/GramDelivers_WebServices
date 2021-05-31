import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order';
import { ORDERS } from './mock-orders';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public selected?: Order;

  select(order: Order) {
    this.selected = order;
//    this.messageService.add('selected order');
  }
  
  getOrders(): Observable<Order[]> {
    const orders = of(ORDERS);
    this.messageService.add('OrderService: fetched orders');
    return orders;
  }
  
  constructor(private messageService: MessageService) { }
}

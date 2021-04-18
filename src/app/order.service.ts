import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order';
import { ORDERS } from './mock-orders';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  getOrders(): Observable<Order[]> {
    const orders = of(ORDERS);
    this.messageService.add('OrderService: fetched orders');
    return orders;
  }
  
  constructor(private messageService: MessageService) { }
}

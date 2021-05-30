import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Input() orders?: Order[];

  onSelect(order: Order): void {

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

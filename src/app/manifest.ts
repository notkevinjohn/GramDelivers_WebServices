import { Order } from './order';

export interface Manifest {
  id: number;
  file_name: string;
  orders: Order[];
  added?: boolean;
}
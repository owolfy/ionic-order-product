import { Injectable } from '@angular/core';
import { Order } from './orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ordersInfo: Order[] = [
    {
      orderID: 'x1',
      customerID: '32879',
      description: 'root beer factory',
      name: 'azazel hummer',
      address: '31 first st',
      orderDetails: [
        {
          orderLine: 1,
          productNr: 832,
          productDescription: 'caterpiller toy'
        },
        {
          orderLine: 2,
          productNr: 12,
          productDescription: 'car toy'
        }
      ]
    },
    {
      orderID: 't11',
      customerID: '33079',
      description: 'TLV biggest printer company',
      name: 'baruch subliminal',
      address: '2 fifth st',
      orderDetails: [
        {
          orderLine: 1,
          productNr: 12,
          productDescription: 'red balloon'
        },
        {
          orderLine: 2,
          productNr: 5,
          productDescription: 'green truck'
        }
      ]
    }
  ];

  constructor() { }

  getAllOrders() {
    return [...this.ordersInfo];
  }

  getProduct(orderId: string) {
    return {
      ...this.ordersInfo.filter(order => {
        return order.orderID === orderId;
      })
    }
  }

}

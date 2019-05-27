import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-description',
  templateUrl: './order-description.page.html',
  styleUrls: ['./order-description.page.scss'],
})
export class OrderDescriptionPage implements OnInit {
  orderObj = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('orderId')) {
        // redirect
        return;
      }
      const productId = this.activatedRoute.snapshot.paramMap.get('orderId');
      this.orderObj = this.ordersService.getProduct(productId);
    });
  }

}

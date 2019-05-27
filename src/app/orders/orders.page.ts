import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Order } from './orders.model';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  ordersList: Order[];
  isItemAvailable = false;
  items = [];

  constructor(
    private ordersService: OrdersService,
    private barcodeScanner: BarcodeScanner,
    private authService: AuthenticationService
  ) {
  }

  resetItems() {
    this.items = [];
  }
  getInputQuery(ev: any) {
    this.resetItems();
    this.getItems(ev.target.value);
  }

  getInputQR(qrCode: string) {
    this.resetItems();
    this.getItems(qrCode);
  }

  getItems(searchInput: any) {
    if (searchInput && searchInput.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.ordersList.filter((item) => {
        if (item.orderID.toLowerCase().indexOf(searchInput.toLowerCase()) > -1) {
          return (item.orderID.toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
        }
        return (item.description.toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
      });
    }
  }

  // QR scan
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.getInputQR(barcodeData.text);
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  logoutUser() {
    this.authService.logoutUser();
  }

  ngOnInit() {
    this.ordersList = this.ordersService.getAllOrders();
  }

}

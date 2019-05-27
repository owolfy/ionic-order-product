import { OrderDetails } from './orderDetails.models';

export interface Order {
    orderID: string;
    customerID: string;
    description: string;
    name: string;
    address: string;
    orderDetails: OrderDetails[];
}

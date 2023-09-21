import {Photo} from "./commonType";
import {Member} from "./customerType";

export interface Cart {
  quantity : string,
  product : Product,
  buyer : Member
}

export interface Payment {
  merchantUuid: string,
  product : Product,
  amount : number,
  paymentGate: string,
  paymentStatus: string,
  paymentDate: string,
  seller : Member,
  buyer : Member
}

export interface Product {
  name : string,
  price : number,
  description : string,
  category : string,
  stock : string,
  registerDate : string,
  photos? : Photo[]
}

export interface SaleInformation {
  memberType : string,
  discountRate : number
}

export interface SalesHistory {
  quantity: number,
  product: Product,
  payment: Payment
}

export interface ShippingLocationInformation {
  recipient: string,
  phoneNumber: string,
  location: string,
  deliveryStatus: string,
  payment: Payment
}


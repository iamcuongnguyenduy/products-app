import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[]{
      return [
        {
          name: 'Webcam',
          price: 20
        },
        {
          name: 'Microphone',
          price: 50
        },
        {
          name: 'Wireless Keyboard',
          price: 100
        },
        {
          name: 'Laptop',
          price: 1000
        }
      ]
  }

}

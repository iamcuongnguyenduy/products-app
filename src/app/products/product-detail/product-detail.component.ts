import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input() product: any;

  @Output() bought = new EventEmitter()

  buy($event: any){
    this.bought.emit()
    console.log("Buy was clicked" + $event)
  }

  isActive = true;
  email = 'me@example.com'
  onKeyUp(){
    console.log(this.email);
      }

  // onKeyUp(value: string){
  //  console.log("Enter was pressed: " + value);
  //  }
 

}

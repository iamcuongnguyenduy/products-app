import { style } from '@angular/animations';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .glyphicon{
      color: blue;
    }
    `
  ]
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite: boolean| undefined;
  @Output() change = new EventEmitter();

  constructor(private productService: ProductsService){}
  products: Product[] = [];

  ngOnInit(): void {
      this.products = this.productService.getProducts()
     
  }


  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }

}

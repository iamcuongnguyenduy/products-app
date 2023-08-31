import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  selectedProduct: any;

  constructor(private productService: ProductsService){}

  products: Product[] = [];

  loadProduct(){
    return this.products = this.productService.getProducts();
  }

  clearProduct(){
    return this.products = [];
  }

  onBuy(){
    window.alert(`You just bought ${this.selectedProduct.name}!`);
  }

  trackProduct(index: any, product: Product){
    return product? product.name:undefined;
  }

  post = {
    favorite: true,
    comment: "Like"
  }
  onChangedFavorite(eventChange: boolean){
    console.log("Favorite changed: ", eventChange );
  }

  checked = true
}

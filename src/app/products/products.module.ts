import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    ProductComponent,
    FormsModule,
    ],
  exports: [
    ProductListComponent,
    
  ]
})
export class ProductsModule { }

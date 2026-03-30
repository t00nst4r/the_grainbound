import {Component, inject} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {AsyncPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'gb-products-overview',
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './products-overview.html',
  styleUrl: './products-overview.css',
})
export class ProductsOverview {
  productsService: ProductService = inject(ProductService);

  products$ = this.productsService.getProducts();
}

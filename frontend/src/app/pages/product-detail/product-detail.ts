import {Component, inject, input} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {switchMap} from 'rxjs';
import {Section} from '../../components/section/section';

@Component({
  selector: 'gb-product-detail',
  imports: [
    Section,
    Section
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
// 1. The input signal from the URL (:id)
  id = input.required<string>();

  private productService = inject(ProductService);

  // 2. We create an observable that reacts to the ID changing,
  // then switch to the service call.
  private product$ = toObservable(this.id).pipe(
    switchMap(id => this.productService.getProduct(id))
  );

  // 3. Convert that stream into a Signal for the template
  // We provide 'null' as initial value so the template @if handles it
  product = toSignal(this.product$, { initialValue: null });
}

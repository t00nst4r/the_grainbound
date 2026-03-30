import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Product} from '@models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  // Garbage link for now as requested
  private apiUrl = 'http://localhost:3000/api/';

  getProducts(): Observable<Product[]> {
    // Mock data based on your specific requirements
    return this.http.get<Product[]>(this.apiUrl + 'products');
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + 'products' + '/' + id);
  }
}

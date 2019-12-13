import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private  products = 'http://5dd7845d0a27af00149fd131.mockapi.io/product';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.products}`);
  }

  deleteProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.products}/${id}`);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.products}`, product);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.products}/${id}`);
  }

  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.products}/${product.id}`, product);
  }
}

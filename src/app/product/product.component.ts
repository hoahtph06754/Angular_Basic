import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './../product';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    // Hàm getProducts() được gọi ngay khi component product render
    this.getProduct();
  }

  getProduct() {
    // Call đến method getProducts() nằm trong services
    this.productService.getProducts().subscribe(data => {
      // Nếu thành công thì trả sẽ trả về dữ liệu thông qua biến data
      console.log(data);
      this.products = data;
    });
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.products = this.products.filter(item => item.id != data.id);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addProduct() {
    // console.log(this.product);
    // gọi đến phuongw thức addProduct() trong services, gọi subscribe để trả về data
    this.productService.addProduct(this.product).subscribe(data => {
      // console.log(data);
      this.router.navigateByUrl('admin');
    });
  }
}

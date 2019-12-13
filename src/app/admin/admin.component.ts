import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: Product[];
  constructor(
    private adminService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
      // Call đến method getProducts() nằm trong services
      this.adminService.getProducts().subscribe(data => {
        // Nếu thành công thì trả sẽ trả về dữ liệu thông qua biến data
        console.log(data);
        this.admin = data;
      });
  }

  deleteProduct(id) {
    this.adminService.deleteProduct(id).subscribe(data =>{
      this.admin = this.admin.filter(item => item.id != data.id);
    })
  }

}

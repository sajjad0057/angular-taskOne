import { Component,OnInit } from '@angular/core';
import { IMenuItems } from 'src/app/shared/types/IMenuItems';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  MenuItems : IMenuItems[] = [];

  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.MenuItems = this.productService.getMenus();
  }
  
}

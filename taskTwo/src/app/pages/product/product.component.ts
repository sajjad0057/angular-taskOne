import { Component,Input,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IMenuItems } from 'src/app/shared/types/IMenuItems';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  MenuItems : IMenuItems[] = [];

  constructor(private _productService : ProductService,private _title:Title){}

  ngOnInit(): void {
    this.MenuItems = this._productService.getMenus(); 
  }

  setTitle(title:string){
    this._title.setTitle(title);  
  }
  
}

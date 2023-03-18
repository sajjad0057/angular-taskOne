import { Injectable } from '@angular/core';
import { MenuItems } from 'src/assets/data/MenuItem';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getMenus(){
    return MenuItems;
  }
}

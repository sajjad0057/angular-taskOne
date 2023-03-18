import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { Category1Component } from './category1/category1.component';
import { Category2Component } from './category2/category2.component';
import { Category3Component } from './category3/category3.component';
import { Category4Component } from './category4/category4.component';
import { Category5Component } from './category5/category5.component';
import { Category6Component } from './category6/category6.component';

@NgModule({
  declarations: [
    ProductComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component,
    Category5Component,
    Category6Component,
  ],
  imports: [CommonModule, ProductRoutingModule],
  exports: [ProductComponent],
})
export class ProductModule {}

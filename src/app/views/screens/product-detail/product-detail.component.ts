import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumbs.interfaces';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  breadcrumbs: Array<Breadcrumb> = [];

  constructor() {
  }

  ngOnInit() {
    this.breadcrumbs = [{name: "Home", path: ""}, {name: "Acer Aspire AIO", path: "/product/detail"}]
  }

}

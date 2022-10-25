import { Component, Input, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumbs.interfaces';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  /** Props */
  @Input() breadcrumbs: Array<Breadcrumb>;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumbs.interfaces';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
    public breadcrumbs: Array<Breadcrumb> = [
        { name: 'Home', path: '' },
        { name: 'Shopping Cart', path: 'cart' },
        { name: 'Checkout', path: 'checkout' },
    ];
    constructor() {}

    ngOnInit(): void {}
}

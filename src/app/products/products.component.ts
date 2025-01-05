import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

    products! : Array<any>;

    constructor() {

    }

    ngOnInit(): void {

        this.products = [
            {id: 1, name: "Computer", price: "6500"},
            {id: 2, name: "Printer", price: "1200"},
            {id: 3, name: "Smart phone", price: "6500"},
            {id: 4, name: "Mouse", price: "200"}
        ];

    }

}

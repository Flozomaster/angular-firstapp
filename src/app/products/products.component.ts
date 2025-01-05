import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

    products! : Array<any>;
    public keyword: string="";

    constructor() {
    }

    ngOnInit(): void {
        this.products = [
            {id: 1, name: "Computer", price: 6500},
            {id: 2, name: "Printer", price: 1200},
            {id: 3, name: "Smart phone", price: 6500},
            {id: 4, name: "Mouse", price: 200}
        ];
    }

    search() {
        // this.products = this.products.filter((p.any)=>p.name.includes(this.keyword));
        console.log(this.keyword);
        let result : any[] = [];
        for (let p of this.products) {
            if (p.name.includes(this.keyword)) {
                result.push(p);
            }
        }
        this.products = result;
    }

    updateProduct(p: any) {

    }

    deleteProduct(p: any) {
        let index = this.products.indexOf(p);
        this.products.splice(index, 1)
    }

}

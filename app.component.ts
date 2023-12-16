import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'e_commerce';

  cartProducts: any[] = [];

  constructor(private productService: ProductService){
    this.productService.cartAddedSubject.subscribe(res=> {

    })
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(){
    this.productService.getCartitemByCustId(1).subscribe((res: any)=> {
      this.cartProducts = res.data;
      debugger;
    })
  }
}

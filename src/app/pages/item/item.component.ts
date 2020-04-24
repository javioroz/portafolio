import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductPage } from '../../interfaces/product-page.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductPage;


  constructor( private route: ActivatedRoute,
               public productService: ProductosService ) { }

  ngOnInit(): void {
    this.route.params
        .subscribe( paramsURL => {
          // console.log(paramsURL.id);
          this.productService.getProducto(paramsURL.id)
              .subscribe( (product: ProductPage) => {
                // console.log(product);
                this.product = product;
              });
        });
  }

}

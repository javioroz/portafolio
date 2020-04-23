import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  product: Product[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://orosuswebangular.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Product[]) => {
          console.log(resp);
          this.product = resp;
          setTimeout(() => {
            this.cargando = false;
          }, 500); // espero 1 seg mostrando icono de cargando
        });
  }
}

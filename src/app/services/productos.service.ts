import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { resolve } from '../../../node_modules/@types/q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  product: Product[] = []; // cambiar nombre a products
  productsFiltered: Product[] = [];
  // --------------------------------------
  constructor( private http: HttpClient) {
    this.cargarProductos();
  }
  // --------------------------------------
  private cargarProductos() {

    return new Promise( ( resolve, reject ) => {

      this.http.get('https://orosuswebangular.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Product[]) => {
          this.product = resp;
          this.cargando = false;
          resolve();
        });
    });
  } // Cierra cargarProductos

  // metodo para conseguir el producto del HTTP
  getProducto( id: string ){
    return this.http.get(`https://orosuswebangular.firebaseio.com/productos/${ id }.json`);
  }

  // metodo para buscar productos con el termino de busqueda usado en search.compoent.ts
  searchProduct( term: string ) {

    if ( this.product.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // esto se ejecuta despues de cargar productos
        // aplicar filtro
        this.filterProducts( term );
      });
    } else {
      // aplicar filtro
      this.filterProducts( term );
    }

  } // Cierra metodo searchProduct

  // funcion para aplicar filtro a los productos con el termino de busqueda
  private filterProducts( term: string ) {
    console.log(this.product);
    this.productsFiltered = []; // purgamos el array para una nueva busqueda
    term = term.toLocaleLowerCase();
    // rellenamos productos con productos filtrados
    this.product.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( term ) >= 0 || tituloLower.indexOf( term ) >= 0 ) {
          this.productsFiltered.push( prod );
      }
    });
  }


} // Cierra ProductosService

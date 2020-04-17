import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  team: any[] = [];
  cargada = false;

  constructor(private http: HttpClient) {
    console.log('Servicio de infoPage listo');
    this.loadInfo();
    this.loadTeam();

  }
  private loadInfo(){
    // Leer el archivo JSON
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPage) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
  }

  private loadTeam(){
    this.http.get('https://orosuswebangular.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
      console.log(resp);
    });
  }
}

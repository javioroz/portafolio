import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { Item1Component } from './pages/item1/item1.component';


const appRoutes: Routes = [
  { path: 'home', component: PortafolioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'item1', component: Item1Component},

  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  /**
   * si activamos useHash, en la URL saldrá server/#/home
   * y asi lo que pone despues de # son modulos de ruta de la app
   * así el servidor ya no buscara /home como una ruta de carpeta en el server
   */
  imports: [RouterModule.forRoot(appRoutes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

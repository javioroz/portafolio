import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulo para hacer peticiones al cliente http
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';
// Paginas
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
// import { Item1Component } from './pages/item1/item1.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    // Item1Component,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Modulo para hacer peticiones al cliente http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

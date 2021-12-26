import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/bsucar/buscar.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    AgregarComponent,
    HeroeComponent,
    BuscarComponent,
    HeroesHomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }

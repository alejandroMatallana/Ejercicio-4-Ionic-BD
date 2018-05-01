import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEnventosPage } from './lista-enventos';

@NgModule({
  declarations: [
    ListaEnventosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEnventosPage),
  ],
})
export class ListaEnventosPageModule {}

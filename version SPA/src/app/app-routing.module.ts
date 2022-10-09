import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';


const routes: Routes = [
  { path: 'Encabezado', component: EncabezadoComponent },
  { path: 'Main', component: MainComponent },
  { path: 'Footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

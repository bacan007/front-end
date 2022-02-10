import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecaudosComponent } from './pages/recaudos/recaudos.component';
import { ReporteComponent } from './pages/reporte/reporte.component';

const routes: Routes = [
  {
    path : 'recaudos',
    component: RecaudosComponent
  },
  {
    path : 'reporte',
    component: ReporteComponent
  },
  {
    path : '**',
    redirectTo: 'recaudos'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes ) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

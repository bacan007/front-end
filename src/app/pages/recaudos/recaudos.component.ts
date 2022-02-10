import { Component, OnInit } from '@angular/core';
import { IRecaudo } from 'src/app/interface/recaudo.interface';
import { ConsumoRecaudosService } from '../../services/consumo-recaudos.service';

@Component({
  selector: 'app-recaudos',
  templateUrl: './recaudos.component.html',
  styleUrls: ['./recaudos.component.css']
})
export class RecaudosComponent {

  recaudos: IRecaudo[] = [];
  recaudosAux: IRecaudo[] = [];

  constructor( private servicio:ConsumoRecaudosService ) { 

  }

  guardarRecaudos(fechaConsulta:string){

    fechaConsulta = fechaConsulta.trim();

    if(fechaConsulta.length === 0){
      return;
    }

    this.servicio.setRecaudos(fechaConsulta).subscribe();
  }

  obtenerRecaudos(){

    this.servicio.getRecaudos().subscribe( resp => {
      this.recaudos = resp.Resultado;
      this.recaudosAux = resp.Resultado;
    });

  }

  buscar( filtro:string){

    filtro = filtro.trim();

    if(filtro.length === 0){
      this.recaudosAux = this.recaudos;
    }

    let recaudos1 = this.recaudos.filter(r => r.Estacion === filtro);
    let recaudos2 = this.recaudos.filter(r => r.Sentido === filtro);
    let recaudos3 = this.recaudos.filter(r => r.Categoria === filtro);
    
    this.recaudosAux = [];

    this.recaudos.push(...recaudos1);
    this.recaudos.push(...recaudos2);
    this.recaudos.push(...recaudos3);

  }

}

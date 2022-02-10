import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/interface/reporte.interface';
import { ConsumoRecaudosService } from 'src/app/services/consumo-recaudos.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {

  reporte: Reporte[] = [];
  totalCantidad:number = 0;
  totalValor:number = 0;

  constructor( private servicio:ConsumoRecaudosService ) { 

    this.totalCantidad = 0;
    this.totalValor = 0;

    this.servicio.getReporteMensual().subscribe( resp => {
    
      this.reporte = resp.Resultado;

      this.Totalizar(this.reporte);

    });

  }

  Totalizar(reporte: Reporte[]){

    for(var i = 0; i< reporte.length;i++){
      this.totalCantidad += reporte[i].TotalCantidad;
      this.totalValor += reporte[i].TotalValor;
    }

  }

}

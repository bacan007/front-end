import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Seguridad } from '../interface/seguridad.interface';
import { Resultado, ResultadoReporte } from '../interface/resultado.interface';
import { Respuesta } from '../interface/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsumoRecaudosService {

  private baseUrl = 'http://localhost:59450';
  private token = '';

  constructor(private http: HttpClient) { 

    const seguridad = this.getToken();

  }

  getToken(){

    const body = {
      UserName: 'user',
      Password: '1234'
    }

    return this.http.post<Seguridad>(`${ this.baseUrl }/api/Seguridad/GeneraToken`, { UserName: 'user', Password: '1234'})
                    .subscribe( resp => {
                      this.token = resp.Token
                    }); 
  }

  setRecaudos( fechaConsulta:string ): Observable<Respuesta>{


    const headers = new HttpHeaders({
      'Token': `${ this.token }`
    });

    fechaConsulta

    return this.http.post<Respuesta>(`${ this.baseUrl }/api/Recaudos/Guardar`, { FechaConsulta: fechaConsulta }, { headers })
                    .pipe(
                      map( resp => resp ),
                    );
  }

  getRecaudos() : Observable<Resultado> {

    const headers = new HttpHeaders({
      'Token': `${ this.token }`
    });

    return this.http.get<Resultado>(`${ this.baseUrl }/api/Recaudos/Recaudos`, { headers })
                    .pipe(
                      map( resp => resp ),
                    );
  }

  getReporteMensual() : Observable<ResultadoReporte> { 

    const headers = new HttpHeaders({
      'Token': `${ this.token }`
    });

    return this.http.get<ResultadoReporte>(`${ this.baseUrl }/api/Recaudos/ReporteMensual`, { headers })
                    .pipe(
                      map( resp => resp ),
                    );
  }

}

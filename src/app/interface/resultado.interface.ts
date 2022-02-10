import { IRecaudo } from "./recaudo.interface";
import { Reporte } from "./reporte.interface";

export interface Resultado {
    Resultado: IRecaudo[];
    Id:        null;
    Mensaje:   string;
    Condicion: boolean;
}

export interface ResultadoReporte {
    Resultado: Reporte[];
    Id:        null;
    Mensaje:   string;
    Condicion: boolean;
}
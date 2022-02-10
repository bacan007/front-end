import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecaudosComponent } from './pages/recaudos/recaudos.component';
import { AppRoutingModule } from './app-routing.module';
import { ReporteComponent } from './pages/reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    RecaudosComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  // O segundo passo é declarar a classe de serviço neste metadado do módulo onde ela é usada.
  // Como estamos declarando o serviço no módulo principal da aplicação, este serviço estará
  //disponível para toda a aplicação.
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

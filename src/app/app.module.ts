import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    CriarCursoModule
  ],
  // O segundo passo é declarar a classe de serviço neste metadado do módulo onde ela é usada.
  // Como estamos declarando o serviço no módulo principal da aplicação, este serviço estará
  //disponível para toda a aplicação.
  // Mesmo declarando o serviço em cada módulo, uma única instancia é compartilhada por
  //toda a aplicação.
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

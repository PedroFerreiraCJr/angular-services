import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from './../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    // Este é um módulo feature, portanto, é usado este import
    CommonModule
  ],
  //providers: [CursosService],
  // Outro metadado importante é este, que diz que este módulo expoe certo component, diretiva, pipe, etc.
  exports: [CriarCursoComponent]
})
// Observação importante: Este é um módulo de funcionalidade, portanto, o import que deve ser feito
//é o import do módulo CommonModule
export class CriarCursoModule { }

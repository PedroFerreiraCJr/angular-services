import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
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

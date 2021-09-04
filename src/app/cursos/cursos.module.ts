import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    // Este é um módulo feature, portanto, é usado este import
    CommonModule
  ],
  //providers: [CursosService],
  // Outro metadado importante é este, que diz que este módulo expoe certo component, diretiva, pipe, etc.
  exports: [CursosComponent]
})
// Observação importante: Este é um módulo de funcionalidade, portanto, o import que deve ser feito
//é o import do módulo CommonModule
export class CursosModule { }

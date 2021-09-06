import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from './../shared/log.service';

// O primeiro passo para fazer com que essa classe possa ser injetada como dependência de outra
//é decorá-la com @Injectable()
// O segundo passo está configurado no metadado providers do módulo onde este serviço poderá
//ser usado.
@Injectable()
export class CursosService {
  emitirCursoCriado: EventEmitter<string> = new EventEmitter<string>();
  static criouNovoCurso: EventEmitter<string> = new EventEmitter<string>();

  cursos: string[] = [
    'Angular 2',
    'Java',
    'Spring Boot'
  ];

  constructor(private log: LogService) {
    console.log('CursosService');
  }

  public getCursos(): string[] {
    this.log.info('Obtendo lista de cursos');
    return this.cursos;
  }

  public adicionar(curso: string): void {
    this.log.info(`Criando um novo curso: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}

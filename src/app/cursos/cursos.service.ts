import { Injectable, EventEmitter } from "@angular/core";

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

  constructor() {
    console.log('CursosService');
  }

  public getCursos(): string[] {
    return this.cursos;
  }

  public adicionar(curso: string): void {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}

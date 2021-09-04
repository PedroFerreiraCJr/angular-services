import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos!: string[];
  _cursosService!: CursosService;
  // A forma correta de injeção de dependência é declarar uma dependência através do construtor.
  // No Angular as dependências são resolvidas através do construtor da classe dependente.
  constructor(_cursosService: CursosService) {
    // Primeiro exemplo de como obter uma dependência da instância do component.
    // Conforme discutido em aula, foi dito que esta não é a melhor forma de obteção das
    //dependências de qualquer objeto gerenciado pelo Angular.
    // Essa não é a forma correta de fazer a injeção de dependência.
    //this.cursosService = new CursosService();
    // A primeira maneira é recebendo e atribuíndo para um atributo do component
    this._cursosService = _cursosService;
  }

  public ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }
}

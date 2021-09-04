import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos!: string[];
  cursosService!: CursosService;

  constructor() {
    // Primeiro exemplo de como obter uma dependência da instância do component.
    // Conforme discutido em aula, foi dito que esta não é a melhor forma de obteção das
    //dependências de qualquer objeto gerenciado pelo Angular.
    this.cursosService = new CursosService();
  }

  public ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}

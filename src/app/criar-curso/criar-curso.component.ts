import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  // Para não compartilhar uma mesma instância de serviço por toda a aplicação, é necessário
  //declarar o serviço dentro do metadado providers do componente que deve ter acesso
  //ao serviço. Dessa forma, uma instância de serviço será criada para cada component.
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos!: string[];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  public addCurso(curso: string): void {
    this.cursosService.adicionar(curso);
  }
}

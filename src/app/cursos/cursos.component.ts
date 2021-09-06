import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  // Para não compartilhar uma mesma instância de serviço por toda a aplicação, é necessário
  //declarar o serviço dentro do metadado providers do componente que deve ter acesso
  //ao serviço. Dessa forma, uma instância de serviço será criada para cada component.
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos!: string[];

  // A forma correta de injeção de dependência é declarar uma dependência através do construtor.
  // No Angular as dependências são resolvidas através do construtor da classe dependente.
  // Uma ultima melhoria pode ser feita para tornar esse atributo privado neste componente,
  //que é usando a palavra-chave 'private'.
  constructor(
    private cursosService: CursosService) {
    // Primeiro exemplo de como obter uma dependência da instância do component.
    // Conforme discutido em aula, foi dito que esta não é a melhor forma de obteção das
    //dependências de qualquer objeto gerenciado pelo Angular.
    // Essa não é a forma correta de fazer a injeção de dependência.
    //this.cursosService = new CursosService();
    // A primeira maneira é recebendo e atribuíndo para um atributo do component
    //this._cursosService = _cursosService;   // removido por conta do private
  }

  public ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    // Este método é um método estático definido na classe CursosService, portanto, é
    //necessário utilizar o nome da classe ao invés do uso do operador 'this'.
    // Dessa forma, mesmo que o serviço seja criado multiplas vezes, é possível fazer o compartilhamento
    //de eventos (comunicação) entre componentes que não estão em um relacionamento parent-child.
    CursosService.criouNovoCurso.subscribe((curso) => {
      this.cursos.push(curso);
    });
  }
}

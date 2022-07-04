import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  
  valor: number = 0;

  exibeTabela: boolean = true;

  listaAlunos: alunos[] = [
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', nota: 5, status: '' },
    { nome: 'Teresa', idade: 25, email: 'teresa.silva@gmail.com', nota: 4.5, status: '' },
    { nome: 'Richard', idade: 31, email: 'richardrodrigues@gmail.com', nota: 6, status: '' },
    { nome: 'Ana', idade: 45, email: 'ana.pereira@gmail.com', nota: 3, status: '' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Nota', 'Status'];
  

  atualizar() {
    this.valor = 0;
    const nota = document.getElementById('note') as HTMLInputElement;
    this.listaAlunos.forEach((element: any) => {
      if (element.nota >= nota.value) {
          element.status = 'Aprovado';
          this.valor++;
      } else {
          element.status = 'Reprovado';
      }
      console.log(element.status);
  
  })
  }


 

  ngOnInit(): void {
  }

  

}

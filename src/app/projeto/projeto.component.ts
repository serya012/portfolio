import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      imageUrl: './assets/relogio_digital.jpg' // Ajuste o caminho da imagem aqui
    },
    {
      name: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      imageUrl: 'caminho_para_sua_imagem_projeto_2.jpg'
    },
    // Adicione mais projetos conforme necessário
  ];
}

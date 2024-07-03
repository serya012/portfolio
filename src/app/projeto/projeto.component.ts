import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projeto',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent {
  projects = [
    {
      name: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      details: 'Mais detalhes sobre o Projeto 1'
    },
    {
      name: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      details: 'Mais detalhes sobre o Projeto 2'
    }
    // Adicione mais projetos conforme necessário
  ];
}

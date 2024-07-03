import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projeto',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, MatCardModule],
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
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
    },
    // Adicione mais projetos conforme necessário
  ];

  slideConfig = { 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    dots: true, 
    infinite: false 
  };
}

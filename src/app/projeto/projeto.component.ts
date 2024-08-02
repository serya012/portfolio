import { Component, OnInit } from '@angular/core';
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
export class ProjetoComponent implements OnInit {
  projects = [
    {
      name: 'Relógio Digital',
      description: 'Relógio digital com fundo personalizavel',
      details: 'Clique aqui para ver o projeto mais de perto😉',
      imageUrl: 'assets/timer_digital.jpeg',
      projectUrl: 'https://serya012.github.io/relogio/'
    },
    // Adicione mais projetos conforme necessário até completar 10
  ];

  chunkedProjects: any[][] = [];

  slideConfig = { 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    dots: true, 
    infinite: false 
  };

  ngOnInit() {
    this.chunkedProjects = this.chunkArray(this.projects, 2);
  }

  chunkArray(myArray: any[], chunk_size: number) {
    const results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }
}

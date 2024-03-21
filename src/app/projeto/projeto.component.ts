import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent {
  @Input() projeto: any;

  constructor() { }
}

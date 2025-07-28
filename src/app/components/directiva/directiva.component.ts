import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directiva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css',
})
export class DirectivaComponent {
 title = 'Directiva ngStyle';

  hayLetraGrande = false;
  hayColorFondo = false;
  hayLetraColor = false;
  hayLetraItalica = false;

  color = 'pink';

  defineEstilos() {
    return {
      'font-size': this.hayLetraGrande ? '24px' : '14px',
      'background-color': this.hayColorFondo ? '#e073c0a2' : '',
      'color': this.hayLetraColor ? 'blue' : 'black',
      'font-style': this.hayLetraItalica ? 'italic' : 'normal'
    };
  }
}

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

  color = 'red';

  defineEstilos() {
    return {
      'font-size': this.hayLetraGrande ? '24px' : '14px',
      'background-color': this.hayColorFondo ? '#d3d3d3' : '',
      'color': this.hayLetraColor ? 'blue' : 'black',
      'font-style': this.hayLetraItalica ? 'italic' : 'normal'
    };
  }
}

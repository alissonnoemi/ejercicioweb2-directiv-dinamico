import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador: number=1;
  incrementar()
  {
    this.contador++;
  }
  decrementar()
  {
    this.contador--;
  }
}

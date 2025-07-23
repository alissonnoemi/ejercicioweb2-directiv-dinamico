import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  items = [
    { title: 'Imagen 1', imgUrl: 'https://i.postimg.cc/vZSr0d81/ALVARO-DIAZ.jpg' },
    { title: 'Imagen 2', imgUrl: 'https://i.postimg.cc/2ywvvsXS/Rels-b.jpg' },
    { title: 'Imagen 3', imgUrl: 'https://i.postimg.cc/52jvYk5f/Ferxxo.jpg' },
    { title: 'Imagen 4', imgUrl: 'https://i.postimg.cc/cJwSF07T/Bubaseta.jpg' },
  ];

currentIndex = 0;

  goTo(index: number) {
    this.currentIndex = index;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}

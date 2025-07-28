import { Component } from '@angular/core';
import { CarrouselComponent } from "../../components/carrousel/carrousel.component";
import { DirectivaComponent } from "../../components/directiva/directiva.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent, DirectivaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

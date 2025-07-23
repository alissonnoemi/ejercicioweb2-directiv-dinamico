import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContadorComponent } from './components/contador/contador.component';
import { BotonesComponent } from './components/botones/botones.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FormsModule } from '@angular/forms';
import { DirectivaComponent } from './components/directiva/directiva.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    ContadorComponent,
    BotonesComponent,
    CarruselComponent,
    DirectivaComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-introduccion';
}

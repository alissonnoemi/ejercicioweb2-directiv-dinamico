import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Usuario } from './usuarios';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  constructor(private http: HttpClient){
  }
  
  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.http.get<Usuario[]>('assets/usuarios.json').subscribe((data) => {
      this.usuarios = data;
    });
  }
}

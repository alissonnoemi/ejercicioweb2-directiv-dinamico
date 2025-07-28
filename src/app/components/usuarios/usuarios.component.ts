import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Usuario } from './usuarios';
import { FormsModule } from '@angular/forms';
import { DetalleUsuariosComponent } from '../detalle-usuarios/detalle-usuarios.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, DetalleUsuariosComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent {
  constructor(private http: HttpClient) {}

  usuarios: Usuario[] = [];
  nombre = '';
  edad: number | null = null;
  carrera = '';
  usuario_selecionado?: Usuario;
  mensaje_usuario: string = '';
  ngOnInit(): void {
    this.http.get<Usuario[]>('assets/usuarios.json').subscribe((data) => {
      this.usuarios = data;
    });
  }
  seleccionarUsuario(usuario: Usuario): void {
    this.usuario_selecionado = usuario;
  }
  ver(mensaje: string): void {
    this.mensaje_usuario = mensaje;
  }
}

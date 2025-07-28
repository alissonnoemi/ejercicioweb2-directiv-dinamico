import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../usuarios/usuarios';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.css'
})
export class DetalleUsuariosComponent {
  @Input() usuario!: Usuario;
  @Output() mensaje_usuario = new EventEmitter<string>();
  mostrar_mensaje(usuario: Usuario): void{
    this.mensaje_usuario.emit('Detalle mostrado');
  }
}

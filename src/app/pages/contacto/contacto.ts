import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class ContactoPage {
  // URLs provisionales: reemplázalas por los perfiles oficiales de Dulce Esencia.
  instagramUrl = 'https://www.instagram.com/';
  facebookUrl = 'https://www.facebook.com/';

  nombre = '';
  correo = '';
  asunto = '';
  mensaje = '';
  confirmacion = '';

  enviarMensaje(formulario: NgForm): void {
    this.confirmacion = '';

    if (formulario.invalid) {
      formulario.control.markAllAsTouched();
      return;
    }

    this.confirmacion = '¡Gracias por escribirnos! Tu mensaje se ha procesado correctamente.';
    formulario.resetForm();
  }
}

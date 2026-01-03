import { Component } from '@angular/core';
import { HeaderUserComponent } from '../../shared/header-user/header-user';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderUserComponent],
  
  // templateUrl: Archivo HTML que define la estructura del componente
  templateUrl: './contact.html',
  
  // styleUrls: Array de archivos CSS que definen los estilos del componente
  styleUrls: ['./contact.css']
})
export class Contact {
  // Esta clase define la lógica del componente Contact
  // Aquí irían métodos para manejar el formulario de contacto
  // Por ejemplo: validación, envío de emails, manejo de mensajes, etc.
}

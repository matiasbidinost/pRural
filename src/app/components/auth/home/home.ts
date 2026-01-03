import { Component } from '@angular/core';
import { HeaderUserComponent } from '../../shared/header-user/header-user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderUserComponent],
  
  // templateUrl: Archivo HTML que define la estructura del componente
  templateUrl: './home.html',
  
  // styleUrls: Array de archivos CSS que definen los estilos del componente
  styleUrls: ['./home.css']
})
export class Home {
  // Esta clase define la lógica del componente Home
  // Por ahora está vacía, pero aquí irían métodos, propiedades, etc.
  // Por ejemplo: métodos para manejar formularios, llamadas a APIs, etc.
}

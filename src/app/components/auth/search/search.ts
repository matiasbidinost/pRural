import { Component } from '@angular/core';
import { HeaderUserComponent } from '../../shared/header-user/header-user';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderUserComponent],
  // templateUrl: Archivo HTML que define la estructura del componente
  templateUrl: './search.html',
  // styleUrls: Array de archivos CSS que definen los estilos del componente
  styleUrls: ['./search.css']
})
export class Search {
  // Esta clase define la lógica del componente Search
  // Aquí irían métodos para manejar la búsqueda de hacienda
  // Por ejemplo: filtros, paginación, resultados, etc.
}

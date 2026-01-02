// Importamos Component desde Angular core
// Component es el decorador que convierte una clase en un componente Angular
import { Component } from '@angular/core';

// CommonModule proporciona directivas básicas como *ngIf, *ngFor, etc.
// ESTO ES DIFERENTE A NgModules:
// - En NgModules: CommonModule se importaba en AppModule y todos los componentes lo heredaban
// - En standalone: cada componente debe importar lo que necesita


// @Component: Decorador que define la configuración del componente
@Component({
  // selector: Nombre del componente en HTML (ej: <app-search></app-search>)
  selector: 'app-search',
  standalone: true,
  imports: [],
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

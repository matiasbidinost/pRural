// Importamos Component desde Angular core
// Component es el decorador que convierte una clase en un componente Angular
import { Component } from '@angular/core';

// Importamos CommonModule desde Angular common
// CommonModule proporciona directivas básicas como *ngIf, *ngFor, etc.
// ESTO ES DIFERENTE A NgModules:
// - En NgModules: CommonModule se importaba en AppModule y todos los componentes lo heredaban
// - En standalone: cada componente debe importar lo que necesita


// @Component: Decorador que define la configuración del componente
@Component({
  // selector: Nombre del componente en HTML (ej: <app-contact></app-contact>)
  selector: 'app-contact',
  
  // standalone: true - ESTO ES NUEVO EN ANGULAR 20
  // En NgModules tradicionales, esto NO existía
  // standalone: true significa que el componente se auto-gestiona
  // NO necesita ser declarado en AppModule.declarations
  // Puede importar sus propias dependencias directamente
  standalone: true,
  
  // imports: Array de módulos/componentes que este componente necesita
  // ESTO ES DIFERENTE A NgModules:
  // - En NgModules: las funcionalidades venían del módulo padre (AppModule)
  // - En standalone: cada componente importa lo que necesita
  // CommonModule: Para usar *ngIf, *ngFor, *ngSwitch, etc.
  imports: [],
  
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

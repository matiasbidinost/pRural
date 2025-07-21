import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importo el proveedor de HttpClient para habilitar peticiones HTTP en servicios como AuthService
import { provideHttpClient } from '@angular/common/http';
//necesito importar el httpClient para que funcione en toda la app y no tener que importar en cada componente


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/auth/login/login').then(m => m.Login)
    },
    {
        path: 'login',
        loadComponent: () => import('./components/auth/login/login').then(m => m.Login)
    },
    {
        path: 'register',
        loadComponent: () => import('./components/auth/register/register').then(m => m.Register)
    },
    {
        path: 'forgotPassword',
        loadComponent: () => import('./components/auth/forgot-p/forgot-p').then(m => m.ForgotP)
    }
];
    
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        // Agrego este proveedor para que HttpClient funcione en toda la app
        provideHttpClient()
    ]
})
export class AppRoutingModule { }
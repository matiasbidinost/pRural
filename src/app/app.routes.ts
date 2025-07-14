import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    }];
    
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
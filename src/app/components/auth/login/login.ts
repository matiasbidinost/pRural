import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  errorMsg: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.errorMsg = null;
      this.authService.login(email, password).subscribe({
        next: (res) => {
          // Login exitoso, podés redirigir o mostrar mensaje
          console.log('Login exitoso', res);
        },
        error: (err) => {
          this.errorMsg = 'Usuario o contraseña incorrectos';
          console.error('Error de login', err);
        }
      });
    } else {
      this.errorMsg = null;
      this.loginForm.markAllAsTouched(); // fuerza mostrar errores
    }
  }
}

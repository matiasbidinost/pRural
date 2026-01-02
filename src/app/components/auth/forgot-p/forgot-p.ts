
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-p',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './forgot-p.html',
  styleUrl: './forgot-p.css'
})
export class ForgotP {

}

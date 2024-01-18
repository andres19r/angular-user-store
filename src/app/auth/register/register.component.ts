import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterOptions } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export default class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  public registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', Validators.required),
  });

  register() {
    if (this.registerForm.invalid) return;
    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    )
      return;

    const registerOptions: RegisterOptions = {
      name: this.registerForm.value.name || '',
      email: this.registerForm.value.email || '',
      password: this.registerForm.value.password || '',
    };
    this.authService.register(registerOptions).subscribe({
      next: () => this.router.navigate(['product', 'list']),
      error: (err) => console.error(err),
    });
  }
}

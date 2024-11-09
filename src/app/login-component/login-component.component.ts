import { Component } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private usuarioService: UsuarioServiceService) { }

  onSubmit(): void {
    if (!this.user.email || !this.user.password) {
      alert('Email and password are required.');
      return;
    }
    this.usuarioService.getUsuario(this.user.email, this.user.password)
      .subscribe({
        next: (usuario) => window.location.href = '/principal',
        error: (error) => alert('Erro: ' + error.statusText)
      });
  }
}


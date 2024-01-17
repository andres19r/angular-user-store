import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import {
  LoginOptions,
  LoginRegisterResponse,
  RegisterOptions,
} from '../interfaces/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private authUrl = `${environment.baseUrl}/auth`;

  constructor() {}

  login(options: LoginOptions): Observable<LoginRegisterResponse> {
    return this.http.post<LoginRegisterResponse>(
      `${this.authUrl}/login`,
      options,
    );
  }

  register(options: RegisterOptions): Observable<LoginRegisterResponse> {
    return this.http.post<LoginRegisterResponse>(
      `${this.authUrl}/register`,
      options,
    );
  }
}

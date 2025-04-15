import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {jwtDecode} from 'jwt-decode';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = environment.apiUrl + 'auth/';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl + 'login', credentials).pipe(
      tap(response => {
        if (response.token && this.isLocalStorageAvailable()) {
          localStorage.setItem('authToken', response.token);
        } else {
          throw new Error('Token not received from backend');
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }

  logout() {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('authToken');
    }
  }

  isLoggedIn(): boolean {
    const token = this.isLocalStorageAvailable() ? localStorage.getItem('authToken') : null;
    if (token && this.isValidJwt(token) && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      this.logout(); // Log out if the token is invalid or expired
      return false;
    }
  }

  getToken(): string | null {
    return this.isLocalStorageAvailable() ? localStorage.getItem('authToken') : null;
  }

  public verifyToken(token: any): boolean {
    if (token) {
      try {
        const jwt: any = jwtDecode(token);
        const currentTimeInSeconds = Math.floor(new Date().getTime() / 1000);
        return !!(jwt.exp > currentTimeInSeconds);
      } catch (error) {
        console.error('Invalid token:', error);
        return false;
      }
    } else {
      return false;
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  private isValidJwt(token: string): boolean {
    const parts = token.split('.');
    return parts.length === 3;
  }


  getAllCount(){
    return this.http.get(environment.apiUrl+'users/count')
  }
}

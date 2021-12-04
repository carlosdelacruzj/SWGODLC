import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {


  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(): Observable<boolean> | boolean {
    console.log('CanActivate');

    return this.authService.verificaAuteticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado) {
            this.router.navigate(['./auth']);
            console.log('se activo esta huevada can activate');
          }
        })
      );
  }
  canLoad(): Observable<boolean> | boolean {
    console.log('CanLoad');

    return this.authService.verificaAuteticacion()
    .pipe(
      tap(estaAutenticado => {
        if (!estaAutenticado) {
          this.router.navigate(['./auth']);
          console.log('se activo esta huevada');
          
        }
      })
    );
  }
}

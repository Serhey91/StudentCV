import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '../../../node_modules/@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route, state): boolean {
        if (this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login'], { queryParams: { accessDenied: true } });
            return false;
        }
    }
    canActivateChild(route, state): boolean {
        console.log(this.authService.isAuth());
        return this.canActivate(route, state);
    }
}
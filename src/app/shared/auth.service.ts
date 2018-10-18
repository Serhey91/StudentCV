import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
@Injectable()
export class AuthService {
    private isLoggedIn = false;
    logIn(login: string, password: string): Observable<any> {
        if (login.toLowerCase() === 'admin' &&
            password === '12345') {
            return of({}).pipe(delay(2000), tap(() => {
                this.isLoggedIn = true;

            }));
        } else { return throwError('Invalid email of password') }


    }
    logOut(): void {
        this.isLoggedIn = false;
    }
    isAuth(): boolean {
        return this.isLoggedIn;
    }
}
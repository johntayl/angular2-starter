import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './auth.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router, private authenticationService: AuthenticationService) {
    }

    canActivate(): Observable<boolean> {
        return this.authenticationService.me();
    }

}
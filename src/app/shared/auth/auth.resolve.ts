import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Injectable()
export class AuthResolve implements Resolve<any> {
    
    constructor(private authenticationService: AuthenticationService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        console.log("Resolving");
        return this.authenticationService.me()
            .subscribe(data => {
                return true;
            }, error => {
                return false;
            });
    }
}
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { API } from '../api';


@Injectable()
export class AuthenticationService {

    private currentUser: any;

    constructor(private api: API) {
    }

     /**
     * Checks if there is an auth token.
     * 
     * @returns {boolean}
     * 
     * @memberOf API
     */
    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    getCurrentUser(): any {
        return this.currentUser;
    }

    me(): Observable<boolean> {
        return this.api.get(this.api.url('auth/me'))
            .map((response: Response) => {
                let user = response.json();
                if (user) {
                    // store user details
                    this.currentUser = user;
                    return true;
                } else {
                    this.api.removeAuthToken();
                    return false;
                }
            });
    }

    login(email: string, password: string): Observable<boolean> {
        return this.api.post(this.api.url('auth/login'), {
            email: email,
            password: password
        })
            .map((response: Response) => {
                let user = response.json();
                if (user && user.auth_token) {
                    // store user details
                    this.currentUser = user.user;
                    this.api.setAuthToken(user.auth_token);
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout() {
        this.currentUser = null;
        this.api.removeAuthToken();
    }
}
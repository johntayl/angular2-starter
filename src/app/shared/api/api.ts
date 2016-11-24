import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptionsArgs, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

/**
 * API Class
 * 
 * @export
 * @class API
 */
@Injectable()
export class API {

    private domain: string = 'http://localhost:8000/api/';
    private authToken: string;

    /**
     * Creates an instance of API.
     * 
     * @param {Http} http
     * 
     * @memberOf API
     */
    constructor(private http: Http) {
        this.authToken = localStorage.getItem('authToken');
    }

    /**
     * Joins to the base of the API url.
     * 
     * @param {string} urlFragment
     * @returns {string}
     * 
     * @memberOf API
     */
    url(str: string): string {
        return this.domain + str;
    }

    /**
     * Set the auth token for all requests.
     * 
     * @param {string} token
     * 
     * @memberOf API
     */
    setAuthToken(token: string) {
        localStorage.setItem('authToken', token);
    }

    /**
     * Remove auth token from all requests.
     * 
     * @memberOf API
     */
    removeAuthToken() {
        localStorage.removeItem('authToken');
    }

    /**
     * Add Authorization header for tokens.
     * 
     * @param {Headers} headers
     * 
     * @memberOf API
     */
    createAuthorizationHeader(headers: Headers): void {
        console.log("Create headers", this.authToken);
        if ( this.authToken )
            headers.append('Authorization', 'Token ' + this.authToken);
        headers.append('Content-Type', 'application/json');
    }

    /**
     * GET request
     * 
     * @param {string} url
     * @param {RequestOptionsArgs} [options]
     * @returns {Observable<Response>}
     * 
     * @memberOf API
     */
    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    /**
     * POST request
     * 
     * @param {string} url
     * @param {*} data
     * @param {RequestOptionsArgs} [options]
     * @returns {Observable<Response>}
     * 
     * @memberOf API
     */
    post(url: string, data: any, options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }

    /**
     * PUT request
     * 
     * @param {string} url
     * @param {*} data
     * @param {RequestOptionsArgs} [options]
     * @returns {Observable<Response>}
     * 
     * @memberOf API
     */
    put(url: string, data: any, options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.put(url, data, {
            headers: headers
        });
    }

    /**
     * PATCH request
     * 
     * @param {string} url
     * @param {*} data
     * @param {RequestOptionsArgs} [options]
     * @returns {Observable<Response>}
     * 
     * @memberOf API
     */
    patch(url: string, data: any, options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.patch(url, data, {
            headers: headers
        });
    }

    /**
     * DELETE request
     * 
     * @param {string} url
     * @param {RequestOptionsArgs} [options]
     * @returns {Observable<Response>}
     * 
     * @memberOf API
     */
    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.delete(url, {
            headers: headers
        });
    }

}
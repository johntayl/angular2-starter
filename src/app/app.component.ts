import { Component } from '@angular/core';

import { AuthenticationService } from './shared/auth';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private authenticationService: AuthenticationService) {
    }
}

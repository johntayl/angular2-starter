import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../shared/auth';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: any;

  constructor(private authenticationService: AuthenticationService) {
      this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {
    
  }

}

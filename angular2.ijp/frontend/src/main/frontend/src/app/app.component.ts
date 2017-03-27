import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginService } from "app/login.service";
import 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  providers: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('Calling login service');
    this.loginService.getUser().subscribe(res => this.processResponse(res), error => this.processError(error));
  }

  constructor(private loginService: LoginService, private router: Router) {
  }

  processResponse(response) {
    console.log('success response status - ' + JSON.stringify(response));
    this.router.navigate(['admin']);
  }

  processError(error) {
    console.log('error status - ' + error.status + ":::" + error._body);
    // Redirect to Login page
    this.router.navigate(['admin']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LoginService } from "app/services/login.service";

@Component({
    selector: 'admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css'],
})
export class AdminComponent implements OnInit {

    public page=1;

    userDetails;
    ngOnInit(): void {
        this.userDetails = this.loginService.response;
        console.log('user details - ' + JSON.stringify(this.loginService.response));        
    }


    constructor(private loginService: LoginService) {
    }

    applyJob(job) {
        console.log(JSON.stringify(job));
    }
}

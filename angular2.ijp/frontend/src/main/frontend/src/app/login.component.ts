import { Component } from '@angular/core';
import { LoginService } from "app/services/login.service";

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{

    constructor(private loginService: LoginService){
        
    }

    login(){
        console.log('I want to login');
    }

}
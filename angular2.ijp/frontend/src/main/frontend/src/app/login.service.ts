
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoginService {

    response:object;

    constructor(private http: Http) {

    }
    public getUser(): Observable<any> {
        console.log('Getting user');
        return this.http.get('user').map(response => { 
            this.response=response.json();
            return this.response;
        });
    }
}
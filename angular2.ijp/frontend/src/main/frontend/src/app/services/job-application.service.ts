
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs/Observable";
import { Location } from '@angular/common';

@Injectable()
export class JobApplicationService {

    response;

    private url = '';

    constructor(private http: Http, private location: Location) {
    }

    public getJobApplication(jId): Observable<any> {
        console.log('Getting Application for jId - '+jId);
        this.url='jobs/'+jId+'/applications';
        this.url = this.location.prepareExternalUrl(this.url);
        return this.http.get(this.url).map(response => {
            this.response = response.json();
            return this.response;
        });
    }

    public getMyJobApplication(): Observable<any> {
        console.log('Getting my Applications');
        this.url='applications';
        this.url = this.location.prepareExternalUrl(this.url);
        return this.http.get(this.url).map(response => {
            this.response = response.json();
            return this.response;
        });
    }

    public addJob(job) {
        return this.http.post(this.url, JSON.stringify(job)).map(res => res);
    }

    public updateJob(job) {
        return this.http.patch(this.url, JSON.stringify(job)).map(res => res);
    }

    public deleteJob(id) {
        return this.http.delete(this.url + '/' + id).map(res => res);
    }
}
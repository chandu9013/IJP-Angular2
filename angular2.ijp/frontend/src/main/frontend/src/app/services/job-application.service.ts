
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs/Observable";
import { Location } from '@angular/common';
import { Job } from "app/models/job";

@Injectable()
export class JobApplicationService {

    response;

    constructor(private http: Http, private location: Location) {
    }

    public getJobApplication(jId): Observable<any> {
        console.log('Getting Application for jId - ' + jId);
        var url = 'jobs/' + jId + '/applications';
        url = this.location.prepareExternalUrl(url);
        return this.http.get(url).map(response => {
            this.response = response.json();
            return this.response;
        });
    }

    public getMyJobApplication(): Observable<any> {
        console.log('Getting my Applications');
        var url = 'applications';
        url = this.location.prepareExternalUrl(url);
        return this.http.get(url).map(response => {
            this.response = response.json();
            return this.response;
        });
    }

    public applyForJob(job: Job) {
        var url = 'jobs/' + job.jId + '/applications';
        url = this.location.prepareExternalUrl(url);
        return this.http.post(url, JSON.stringify(job)).map(res => res);
    }

    public deleteApplication(id){
        var url = 'applications/'+id;
        url = this.location.prepareExternalUrl(url);
        return this.http.delete(url).map(res=>res);
    }
}
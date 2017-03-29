
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs/Observable";
import { Location } from '@angular/common';
import { NewJob } from "app/models/new-job";
import { RequestOptions, Headers } from "@angular/http";


@Injectable()
export class JobService {

    response;

    headers: Headers;
    options: RequestOptions;

    private url = 'jobs';

    constructor(private http: Http, private location: Location) {
        this.url = this.location.prepareExternalUrl(this.url);
        console.log('url - ' + this.url);
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });

    }
    public getJobs(pagesize, pageno): Observable<any> {
        console.log('Getting Jobs');
        return this.http.get(this.url + '/' + pagesize + "/" + pageno).map(response => {
            this.response = response.json();
            return this.response;
        });
    }

    public addJob(job: NewJob) {
        console.log('new job - ' + JSON.stringify(job));
        return this.http.post(this.url, JSON.stringify(job), this.options).map(res => res);
    }

    public updateJob(job) {
        return this.http.patch(this.url, JSON.stringify(job), this.options).map(res => res);
    }

    public deleteJob(id) {
        return this.http.delete(this.url + '/' + id).map(res => res);
    }
}

import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs/Observable";
import { Location } from '@angular/common';

@Injectable()
export class JobService {

    response;

    private url = 'jobs';

    constructor(private http: Http, private location: Location) {
        //this.url = this.location.prepareExternalUrl(this.url);
        console.log('url - '+this.url);
    }
    public getJobs(pagesize, pageno): Observable<any> {
        console.log('Getting Jobs');
        return this.http.get(this.url + '/' + pagesize + "/" + pageno).map(response => {
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

import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs/Observable";

@Injectable()
export class JobService {

    response:object;

    constructor(private http: Http) {
    }
    public getJobs(pagesize,pageno): Observable<any> {
        console.log('Getting Jobs');
        return this.http.get('jobs/'+pagesize+"/"+pageno).map(response => { 
            this.response=response.json();
            return this.response;
        });
    }

    public addJob(job){
        return this.http.post('jobs',JSON.stringify(job)).map(res=>res);
    }

    public updateJob(job){
        return this.http.patch('jobs',JSON.stringify(job)).map(res=>res);
    }

    public deleteJob(id){
        return this.http.delete('jobs/'+id).map(res=>res);
    }
}
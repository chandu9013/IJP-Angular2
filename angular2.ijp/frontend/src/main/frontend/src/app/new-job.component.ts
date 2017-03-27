import { Component } from '@angular/core';
import { LoginService } from "app/login.service";
import { NewJob } from "app/new-job";

@Component({
    selector:'new-job',
    templateUrl:'./new-job.component.html',
})
export class NewJobComponent{

    job:NewJob;

    categories=[{'cId':1,'categoryName':'developer'},{'cId':2,'categoryName':'tester'}];

    onSubmit(){
        
    }
    
}
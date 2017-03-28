import { Component } from '@angular/core';
import { NewJob } from "app/models/new-job";

@Component({
    selector:'new-job',
    templateUrl:'./new-job.component.html',
})
export class NewJobComponent{

    job:NewJob;

    categories=[{'cId':1,'categoryName':'developer'},{'cId':2,'categoryName':'tester'}];

    onSubmit(){
        console.log('Lets add new job now');
    }
    
}

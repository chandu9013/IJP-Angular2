import { Component, OnInit } from '@angular/core';
import { JobService } from "app/services/job.service";
import { LoginService } from "app/services/login.service";
import { Job } from "app/models/job";
import { JobApplicationService } from "app/services/job-application.service";

@Component({
    templateUrl: 'employee-jobs.component.html'
})
export class EmployeeJobsComponent implements OnInit {

    userDetails;
    jobsDetails = [];
    message:string='';

    constructor(private jobService: JobService, private loginService: LoginService, private applicationService: JobApplicationService) { }

    ngOnInit() {
        this.userDetails = this.loginService.response;
        this.getJobs();
    }

    /**
     * Apply for job
     */
    private apply(job: Job) {
        this.applicationService.applyForJob(job).subscribe(
            res => {
                console.log('Application added succesfully');
                // Reload Jobs
                this.getJobs();
                this.message='Application succesful';
            },
            error => { console.log('error occurred - ' + error.status); });
    }

    private getJobs() {
        this.jobService.getJobs(1000, 1).subscribe(res => {
            this.jobsDetails = res;
            console.log('jobs - ' + JSON.stringify(res));
        }, error => console.log('error status - ' + error.status));
    }
}
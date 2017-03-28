import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/services/login.service";
import { JobApplicationService } from "app/services/job-application.service";

@Component({
    templateUrl: 'my-applications.component.html'
})

export class MyApplicationsComponent implements OnInit {

    message:string='';

    jobApplications = [];
    constructor(private loginService: LoginService, private applicationService: JobApplicationService) { }

    ngOnInit() {
        this.getMyApplications();
    }

    private getMyApplications() {
        this.applicationService.getMyJobApplication().subscribe(
            res => {
                this.jobApplications = res;
                console.log('My Applications - ' + JSON.stringify(this.jobApplications));
            },
            error => {
                console.log('error occurred - ' + error.status);
            });
    }

    private delete(application) {
        this.applicationService.deleteApplication(application.jAppId).subscribe(
            res => {
                console.log('Application deleted succesfully');
                this.getMyApplications();
                this.message='Application deleted succesfully';
            },
            error => {
                console.log('error occurred - ' + error.status);
            });
    }
}
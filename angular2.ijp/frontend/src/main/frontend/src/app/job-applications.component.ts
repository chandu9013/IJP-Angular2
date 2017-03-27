import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginService } from "app/login.service";
import 'rxjs';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { JobService } from "app/job.service";
import { JobApplicationService } from "app/job-application.service";

@Component({
  selector: 'job-applications',
  templateUrl: './job-applications.component.html',
  providers: []
})
export class JobApplicationsComponent {

  jId;
  selectedJob = {};
  jobs = [];
  jobApplications = [];
  constructor(private route: ActivatedRoute, private jobService: JobService, private applicationService: JobApplicationService) {
    route.params.map(res => res).subscribe(res => this.jId = res['id']);
    this.jobs = jobService.response.jobs;
    for (let job of this.jobs) {
      if (job.jId == this.jId) {
        this.selectedJob = job;
        break;
      }
    }
    console.log('selected job - ' + JSON.stringify(this.selectedJob));
    this.applicationService.getJobApplication(this.jId).
      subscribe(res => console.log(JSON.stringify(res)),
      error => console.log('error status - ' + error.status));
  }
}

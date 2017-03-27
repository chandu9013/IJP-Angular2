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
export class JobApplicationsComponent implements OnInit {

  jId;
  selectedJob = {};
  jobs = [];
  jobApplications = [];
  constructor(private route: ActivatedRoute, private jobService: JobService, private applicationService: JobApplicationService, private router: Router) {
    route.params.map(res => res).subscribe(res => this.jId = res['id']);
  }

  ngOnInit(): void {
    if (this.jobService.response != null) {
      this.jobs = this.jobService.response.jobs;
    } else {
      // this.jobService.getJobs(1000, 1).subscribe(res => {
      //   this.jobs = res.jobs;
      //   console.log('jobs - ' + JSON.stringify(res));
      // }, error => console.log('error status - ' + error.status));
      this.jobService.getJobs(1000,1);
    }
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
    console.log(this.router.url);
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login.component';
import 'rxjs';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Job } from "app/models/job";
import { JobService } from "app/services/job.service";
import { JobApplicationService } from "app/services/job-application.service";

@Component({
  selector: 'job-applications',
  templateUrl: './job-applications.component.html',
  providers: []
})
export class JobApplicationsComponent implements OnInit {

  jId: number;
  selectedJob: Job;
  jobs: Job[];
  jobApplications = [];
  constructor(private route: ActivatedRoute, private jobService: JobService, private applicationService: JobApplicationService, private router: Router) {
    route.params.map(res => res).subscribe(res => this.jId = res['id']);
    console.log('selected jId - ' + this.jId);
  }

  ngOnInit(): void {
    if (this.jobService.response != null) {
      this.jobs = this.jobService.response.jobs;
      this.getSelectedJob();
    } else {
      this.jobService.getJobs(1000, 1).subscribe(res => {
        this.jobs = res.jobs;
        console.log('jobs - ' + JSON.stringify(res));
        this.getSelectedJob();
      }, error => console.log('error status - ' + error.status));
    }
    this.applicationService.getJobApplication(this.jId).
      subscribe(res => console.log('applications - ' + JSON.stringify(res)),
      error => console.log('error status - ' + error.status));
  }

  private getSelectedJob() {
    for (let job of this.jobs) {
      if (job.jId == this.jId) {
        this.selectedJob = job;
        break;
      }
    }
    console.log('selected job - ' + JSON.stringify(this.selectedJob));
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/login.service";
import { Router } from "@angular/router";
import { JobService } from "app/job.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'admin-jobs',
  templateUrl: 'admin-jobs.component.html',
  providers: []
})
export class AdminJobsComponent implements OnInit {

  userDetails;
  jobsDetails = [];

  constructor(private loginService: LoginService, private jobService: JobService) {

  }

  ngOnInit(): void {
    this.userDetails = this.loginService.response;
    console.log('user details - ' + JSON.stringify(this.loginService.response));
    this.jobService.getJobs(1000, 1).subscribe(res => {
      this.jobsDetails = res;
      console.log('jobs - ' + JSON.stringify(res));
    }, error => console.log('error status - ' + error.status));
  }

  applyJob(job) {
    console.log(JSON.stringify(job));
  }


}

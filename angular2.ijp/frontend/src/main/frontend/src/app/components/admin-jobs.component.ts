import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LoginService } from "app/services/login.service";
import { JobService } from "app/services/job.service";

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
}

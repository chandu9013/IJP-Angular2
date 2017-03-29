import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LoginService } from "app/services/login.service";
import { JobService } from "app/services/job.service";

@Component({
  selector: 'employee',
  templateUrl: 'employee.component.html',
  providers: []
})
export class EmployeeComponent implements OnInit {

  userDetails;
  jobsDetails = [];

  ngOnInit(): void {
    this.userDetails = this.loginService.response;
    console.log('user details - ' + JSON.stringify(this.loginService.response));
  }


  constructor(private loginService: LoginService, private jobService: JobService,private router:Router) {
  }

  applyJob(job) {
    console.log(JSON.stringify(job));
  }


}

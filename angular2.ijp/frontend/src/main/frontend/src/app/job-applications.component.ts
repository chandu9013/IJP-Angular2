import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginService } from "app/login.service";
import 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'job-applications',
  templateUrl: './job-applications.component.html',
  providers: [LoginService]
})
export class JobApplicationsComponent {

}

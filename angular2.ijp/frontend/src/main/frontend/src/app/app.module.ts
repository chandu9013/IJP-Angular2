import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { AlertModule } from 'ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { JobService } from "app/services/job.service";
import { LoginService } from "app/services/login.service";
import { JobApplicationService } from "app/services/job-application.service";
import { AdminComponent } from "app/components/admin.component";
import { AdminJobsComponent } from "app/components/admin-jobs.component";
import { NewJobComponent } from "app/components/new-job.component";
import { JobApplicationsComponent } from "app/components/job-applications.component";
import { LoginComponent } from "app/components/login.component";
import { EmployeeComponent } from "app/components/employee.component";
import { EmployeeJobsComponent } from "app/components/employee-jobs.component";
import { MyApplicationsComponent } from "app/components/my-applications.component";

const appRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'jobs', pathMatch: 'full' },
      { path: 'jobs', component: AdminJobsComponent },
      { path: 'jobs/new', pathMatch: 'full', component: NewJobComponent },
      { path: 'jobs/:id', component: JobApplicationsComponent }
    ]
  },
  {
    path: 'employee', component: EmployeeComponent,
    children: [
      { path: '', redirectTo: 'jobs', pathMatch: 'full' },
      { path: 'jobs', component: EmployeeJobsComponent },
      { path: 'applications', component: MyApplicationsComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  //{ path: '',component: AppComponent},
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    AdminJobsComponent,
    JobApplicationsComponent,
    AdminComponent,
    NewJobComponent,
    EmployeeComponent,
    EmployeeJobsComponent,
    MyApplicationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    JobService,
    LoginService,
    JobApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// { provide: APP_BASE_HREF, useValue: '/ijp' },
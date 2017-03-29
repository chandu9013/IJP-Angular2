import { Component, OnInit, ViewChild } from '@angular/core';
import { NewJob } from "app/models/new-job";
import { JobService } from "app/services/job.service";
import { Team } from "app/models/team";
import { Category } from "app/models/category";
import { MiscService } from "app/services/misc.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
    selector: 'new-job',
    templateUrl: './new-job.component.html',
    styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {

    error: string = null;
    job: NewJob;
    teams: Array<Team>;
    categories: Array<Category>;

    constructor(private jobService: JobService, private miscService: MiscService, private router: Router) {
        this.job = new NewJob();
    }

    ngOnInit(): void {
        this.miscService.getTeams().subscribe(
            res => this.teams = res,
            error => console.log('error occurred - ' + error.status)
        );

        this.miscService.getCategories().subscribe(
            res => this.categories = res,
            error => console.log('error occurred - ' + error.status)
        );
    }

    onSubmit() {
        console.log('Lets add new job now - ' + this.job.teamId);
        this.jobService.addJob(this.job).subscribe(
            res => this.goBack(),
            error => {
                console.log('error occurred - ' + error.status);
                this.goBack();
            }
        );
    }

    goBack() {
        this.router.navigateByUrl('/admin/jobs');
    }
}

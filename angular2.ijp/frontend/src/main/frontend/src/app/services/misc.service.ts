import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Team } from "app/models/team";
import { Location } from '@angular/common';
import { Observable } from "rxjs/Observable";
import { Category } from "app/models/category";

@Injectable()
export class MiscService {

    teams: Array<Team>;
    categories: Array<Category>;

    constructor(private http: Http, private location: Location) { }

    getTeams(): Observable<Array<Team>> {
        var url = 'teams';
        url = this.location.prepareExternalUrl(url);
        console.log('url - ' + url);
        return this.http.get(url).map(
            res => {
                this.teams = res.json();
                return this.teams;
            });
    }

    getCategories(): Observable<Array<Category>> {
        var url = 'categories';
        url = this.location.prepareExternalUrl(url);
        console.log('url - ' + url);
        return this.http.get(url).map(
            res => {
                this.categories = res.json();
                return this.categories;
            });
    }
}
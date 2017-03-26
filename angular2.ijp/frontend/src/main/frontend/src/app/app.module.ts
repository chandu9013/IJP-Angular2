import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { AlertModule } from 'ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from "./login.component";
import { HomeComponent } from "./home.component";
import { NavbarComponent } from "app/navbar.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login',      component: LoginComponent },
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
    AppComponent,LoginComponent,HomeComponent,NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    Ng2PaginationModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/ijp'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

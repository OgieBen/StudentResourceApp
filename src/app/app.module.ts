import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'


import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { DataService } from './data.service';
import { ViewResourcesComponent } from './view-resources/view-resources.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewResourcesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'resources',
        component: ViewResourcesComponent
      },
      {
        path: '',
        redirectTo: '/resources',
        pathMatch: 'full'
      }
    ]),
    // TODO: make the list of resource the default route

    // TODO: add a route for adding resources
    // TODO: add a route for viewing all resources
    // TODO: add a route for viewing the content of a resource
    // TODO: add a route for creating a student
    AngularFireModule.initializeApp(environment.firebase, 'Alc_web'),
    AngularFireModule,
    AngularFireDatabaseModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

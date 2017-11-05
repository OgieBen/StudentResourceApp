import { Component, OnInit } from '@angular/core';
import { CreateStudentResourceComponent } from './create-student-resource/create-student-resource.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { Resource } from './student-resource/resource';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import { Student } from './student/student';
import { DataService } from './data.service';
import { StudentInterface } from './interfaces/StudentInterface';
import { Elxir } from './interfaces/Elxir';

import { ViewResourcesComponent } from './view-resources/view-resources.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `

    <a routerLink='/resource'>Test</a> 
    <router-outlet></router-outlet>

  `,


  /* <ul *ngFor = "let student of students " >
  
       <li>Title: {{student.title}} </li>
       <li>Body: {{student.body}} </li>
     </ul>   */
  /* <ul *ngFor = "let resource of collection | async" >
       <li>{{resource.email}}</li>
     </ul> */



  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  students: Student[];

  tempStudents: any = [];



  constructor(
    private dataService: DataService,
    private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.getStudentsFromWeb();
  }


  /**
   * Get's data from @class data.service.ts
   * @returns void
   */
  public getStudentsFromWeb(): void {

    this.tempStudents = this.dataService
      .getStudentsFromWeb().then(data => {
        this.students = data;
        data.forEach(element => {
          console.log(element);
        });
        console.log(this.students);
      });

  }


}

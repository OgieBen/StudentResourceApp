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
   templateUrl: './app.component.html',
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

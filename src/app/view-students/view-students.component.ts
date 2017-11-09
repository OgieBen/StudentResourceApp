import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

import { Student } from '../student/student';
@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {


  students: Student[];

  tempStudents: any = [];
  loader = true;



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
        this.loader = false;
        data.forEach(element => {
          console.log(element);
        });
        console.log(this.students);
      });

  }
}

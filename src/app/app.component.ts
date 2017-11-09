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
  menuIcon: string;
  menuToggle = false;

  private innerResourceTitle: string;
  private innerResourceBody: string;



  constructor(
    private dataService: DataService,
    private httpClient: HttpClient) {
    this.menuIcon = "/assets/images/menu.png";

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

  showMenu(): void {

    console.log('menu was clicked');
  }

  showResource(resourceTitle: string, resourceBody: string): void {
     this.innerResourceTitle = resourceTitle;
     this.innerResourceBody = resourceBody;
  }

  public toggleMenuButton(): void {

    if (this.menuToggle) {
      this.menuToggle = false;
      console.log(this.menuToggle);
    } else {
      this.menuToggle = true;
      console.log(this.menuToggle);
    }
  }

}

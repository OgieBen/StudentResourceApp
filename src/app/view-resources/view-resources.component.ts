import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-resources',
  //templateUrl: './view-resources.component.html',
  template: `
  
<div class="wrapper">

  <div class="screen">


      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 header shadow-raised">
        <div class=" col-xs-12 col-sm-6 col-md-4 col-lg-4 brand">
          <p>Student Resource App Track App</p>
        </div>
      </div>

      <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 detail-wrapper">
       <div class="row">
          <div class="col-xs-9 col-sm-4 col-md-4 col-lg-2 dim-shadow detail-view"  *ngFor ="let resource of resources"  >
          
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 resource-title-box">
                <p class="resource-title">{{resource.title}}</p>
              </div>

              <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 resource-bottom-box no-padding">
              
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 author-box no-padding">
                
                      <p class="col-xs-12 col-sm-12 col-md-12 col-lg-12  author-name">Author: Ogie Ben</p>
                  
                  </div>
                
              </div>
           </div>
          </div>
        

      </div>
    </div>
    </div>
  `,
  styleUrls: ['./view-resources.component.css']
})
export class ViewResourcesComponent implements OnInit {

  resources: Student[];

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
        this.resources = data;
        data.forEach(element => {
          console.log(element);
        });
        console.log(this.resources);
      });

  }

}

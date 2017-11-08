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

  
  <div class="loader-position centralize-vertical centralize-content" [class.display-loader]="!loader">
  
              <i class="fa fa-spinner fa-spin" style="font-size:62px; color: #004;"></i>
              <!-- <i class="fa fa-circle-o-notch fa-spin" style="font-size:62px; color: #004;"></i> -->
  
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
                      <button >delete</button>
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
  loader = true;



  constructor(
    private dataService: DataService,
    private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.getResourcesFromWeb();
  }


  /**
   * Get's data from @class data.service.ts
   * @returns void
   */
  public getResourcesFromWeb(): void {

    this.tempStudents = this.dataService
      .getResourcesFromWeb().then(data => {
        this.resources = data;
        this.loader = false;
        data.forEach(element => {
          console.log(element);
        });
        console.log(this.resources);
      });

  }

}

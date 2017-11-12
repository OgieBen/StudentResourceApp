import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-resources',
  templateUrl: './view-resources.component.html',
  styleUrls: ['./view-resources.component.css']
})
export class ViewResourcesComponent implements OnInit {

  resources: Student[];

  tempStudents: any = [];
  loader = true;
  deleteIcon: string;
  infoIcon: string;


   innerResourceTitle: string;
   innerResourceBody: string;
   innerResourceKey: string;
   updateIcon: string;
   showModal = false;
   showEditModal = false;
   buttonLoader = true;
   cardFlag = '';
   updateInProgress = false;



  constructor(
    private dataService: DataService,
    private httpClient: HttpClient) {
    this.deleteIcon = '/assets/images/deleteIcon2.png';
    this.infoIcon = '/assets/images/infoIcon.png';
    this.updateIcon = '/assets/images/edit_white.png';
  }

  ngOnInit() {
    this.getResourcesFromWeb();
  }

   toggleEditModalButton(): void {
    this.showEditModal = false;
  }

   editResource(resourceKey: string, resourceTitle: string, resourceBody: string): void {

    this.innerResourceTitle = resourceTitle;
    this.innerResourceBody = resourceBody;
    this.innerResourceKey = resourceKey;

    if (this.showEditModal) {

      this.showEditModal = false;
    } else {
      this.showEditModal = true;
    }
  }

  showResource(resourceTitle: string, resourceBody: string): void {
    this.innerResourceTitle = resourceTitle;
    this.innerResourceBody = resourceBody;

    if (this.showModal) {
      this.showModal = false;
    } else {
      this.showModal = true;
    }


  }

  updateResource(key: string, body: string): void {

    this.updateInProgress = true;

    console.log('clicked updateResource: ' + this.updateInProgress);
    this.dataService.updateResource(key, body).then(() => {
      this.updateInProgress = false;
    }).catch(() => {
      this.updateInProgress = false;
    });

  }


   toggleModalButton(): void {
    this.showModal = false;
  }

 deleteResource(key: string): void {
    console.log('key ' + key);

    this.dataService.deleteResource(key)
      .then((data) => {

         this.cardFlag = key;
        console.log(data)
        if (data) {
          console.log(data.msg);
        }

      });
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

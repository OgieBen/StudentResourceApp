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


  private innerResourceTitle: string;
  private innerResourceBody: string;

  private showModal = false;

  


  constructor(
    private dataService: DataService,
    private httpClient: HttpClient) {
    this.deleteIcon = '/assets/images/deleteIcon2.png';
    this.infoIcon = '/assets/images/infoIcon.png';

  }

  ngOnInit() {
    this.getResourcesFromWeb();
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


  private toggleModalButton(): void{
    this.showModal = false;
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

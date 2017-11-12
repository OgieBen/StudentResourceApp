import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-student-resource',
  templateUrl: './create-student-resource.component.html',
  // template: `

  //       <input  #title name="name"
  //       [(ngModel)]='innerTitle' 
  //       class="col-xs-12 col-sm-11 col-md-11 col-lg-11 title-input" 
  //       name="studentResourceName" type="text" placeholder="Enter the name of your resource"/>

  //       <p>{{innerTitle}}</p>

  //       `,
  styleUrls: ['./create-student-resource.component.css']
})
export class CreateStudentResourceComponent implements OnInit {

  @Input() innerTitle: string;
  @Input() innerBody: string;
  loader = false;


  constructor(private dataService: DataService) { }

  ngOnInit() {
  }




  createResource(title: string, body: string): void {

    if (title && body) {
      this.loader = true;
      this.dataService.createResource(title, body)
        .then((data) => {
          console.log(data);
          this.loader = false;
          this.innerTitle = '';
          this.innerBody = '';
         }).catch(() => {
            this.loader = false;
            
            // notify user of error
         });
      console.log('valid values: ' + title + '------- ' + body);


    } else {
      console.log('Null values');
    }




  }

}

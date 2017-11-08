import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @Input() innerName: string;
  @Input() innerEmail: string;
  loader = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


  addStudent(name: string, email: string): void {

    
    if (name && email) {
      this.loader = true;
      this.dataService.addStudent(name, email).then((data) => {
        console.log('Response data: ' + data);
        this.loader = false;
        this.innerName = '';
        this.innerEmail = '';
      }
      ).catch(error => {
        console.error(error);

      });
      console.log('valid values: ' + name + '------- ' + email);


    } else {
      console.log('Null values');
    }
  }

}

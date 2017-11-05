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


  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


  addStudent(name: string, email: string): void {

    if (name && email) {
      this.dataService.addStudent(name, email).then((data) =>
        console.log('Response data: ' + data)
      ).catch(error => console.error(error));
      console.log('valid values: ' + name + '------- ' + email);


    } else {
      console.log('Null values');
    }
  }

}

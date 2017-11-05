import { Injectable } from '@angular/core';
import { Resource } from './student-resource/resource';
import { Student } from './student/student';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { StudentInterface } from './interfaces/StudentInterface';
import 'rxjs/add/observable/fromPromise';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    /* studentUrl = 'http://localhost:8080/students';*/
    studentUrl = 'http://localhost:8080/resources';

    /**
     * Pull data from sever.
     * @returns Promise<Student[]>
     */
    getStudentsFromWeb(): Promise<Student[]> {

        return this.http
            .get(this.studentUrl)
            .toPromise()
            .then(res =>
                res.json() as Student[])
            .catch(this.errorHandler);

    }


    /**
     * Handles error from promise.
     * @param error any
     * @returns Promise<any>
     */
    private errorHandler(error: any): Promise<any> {

        console.error('Error trying to get students: ', error);

        return Promise.reject(error.message || error);
    }
}

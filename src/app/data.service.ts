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

    
   

    private headers = new Headers({ 'Content-Type': 'application/json' });

    /**
     * Pull data from sever.
     * @returns Promise<Student[]>
     */
    getResourcesFromWeb(): Promise<Student[]> {

        return this.http
            .get(this.rUrl)
            .toPromise()
            .then(res =>
                res.json() as Student[])
            .catch(this.errorHandler);

    }

    /**
     * Pull data from sever.
     * @returns Promise<Student[]>
     */
    getStudentsFromWeb(): Promise<Student[]> {

        return this.http
            .get(this.sUrl)
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

        //   console.error('Error in service: ', error);
        console.log('Error in service: ', error);

        return Promise.reject(error.message || error);
    }



    createResource(title: string, body: string): Promise<Resource> {

        const payload: Resource = { title: title, body: body };

        return this.http
            .post(this.cUrl, JSON.stringify(payload), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Resource)
            .catch(this.errorHandler);
    }

    addStudent(name: string, email: string): Promise<Student> {
        const payload: Student = { name: name, email: email };

        return this.http
            .post(this.aUrl, JSON.stringify(payload), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Student)
            .catch(this.errorHandler);
    }
}

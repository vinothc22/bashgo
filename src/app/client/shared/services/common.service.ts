import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobsElement } from '../models/jobs.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  API_KEY: "AIzaSyCVXUZFOVd7FJDKmSwFc_qggJKlNeEBirw";
  jobsApi: string = "http://www.bashgo.com:8002/api/BashgoJob/GetJobvacancy";
  //jobsApi: string = "http://localhost:3000/currentVacancy";


  constructor(private http: HttpClient) { }


  getAllJobs(): Observable<JobsElement[]> {
    return this.http.get<JobsElement[]>(`http://www.bashgo.com:8002/api/BashgoJob/GetJobvacancy&apiKey=${this.API_KEY}`);
  }

  getJobById(id: number) {
    //  return this.http.get<JobsElement[]>(`${this.jobsApi}/job/${id}`);
  }

}

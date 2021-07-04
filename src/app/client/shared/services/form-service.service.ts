import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactFormElement, CareerFormElement } from '../models/form.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private contactMailApi = 'http://www.bashgo.com:8002/api/Email/PostContact/';

  constructor(private http: HttpClient) { }

  postContactMessage(input: any) {
    return this.http.post(
      this.contactMailApi,
      input,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        responseType: 'text'
      }).
      pipe(map((response) => {
        if (response)
          return response;
      },
        (error: any) => {
          return error;
        }
      ))
  }
}

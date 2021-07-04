import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../shared/services/form-service.service';

@Component({
  selector: 'bashgo-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  bannerImage: string = 'contacts-image.jpg';

  contactForm: FormGroup;
  submitted: boolean = false;
  charPattern = "^[a-zA-Z0-9_-]*$"
  mobilePattern = "^[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  responseMessage: string = '';

  isLighBoxOpen: boolean = false;


  private contactMailApi = 'http://www.bashgo.com:8002/api/Email/PostContact/';

  constructor(private formBuilder: FormBuilder, private contact: FormService, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(this.charPattern)]],
      designation: ['', Validators.required],
      company: ['', Validators.required],
      industry: [''],
      contactNo: ['', [Validators.required, Validators.pattern(this.mobilePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      country: ['', Validators.required],
      contents: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid)
      return;
    var formData: any = new FormData();
    formData.append("name", this.contactForm.get("name").value);
    formData.append("designation", this.contactForm.get("designation").value);
    formData.append("company", this.contactForm.get("company").value);
    formData.append("industry", this.contactForm.get("industry").value);
    formData.append("contactNo", this.contactForm.get("contactNo").value);
    formData.append("email", this.contactForm.get("email").value);
    formData.append("country", this.contactForm.get("country").value);
    formData.append("contents", this.contactForm.get("contents").value);

    this.http.post(this.contactMailApi, formData).subscribe(
      (response) => {
        if (response["result"] == "success") {
          this.responseMessage = "Thanks for the message! I'll get back to you soon!";
        } else {
          this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
        }
        this.contactForm.enable(); // re enable the form after a success
        this.submitted = true; // show the response message
        //this.isLoading = false; // re enable the submit button
        console.log(response);
      },
      (error) => {
        this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
        this.contactForm.enable(); // re enable the form after a success
        this.submitted = true; // show the response message
        //this.isLoading = false; // re enable the submit button
        console.log(error);
      }
    );
    // console.log(JSON.stringify(this.contactForm.value, null, 4))
  }

  onClear() {
    this.submitted = false;
    this.contactForm.reset();
  }

  openLightBox(index) {
    this.isLighBoxOpen = true;
  }

}

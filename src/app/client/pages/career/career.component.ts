import { Component, OnInit } from '@angular/core';
import { JobsElement } from '../../shared/models/jobs.model';
import { CommonService } from '../../shared/services/common.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bashgo-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  bannerImage: string = 'career-image.jpg';
  jobs: JobsElement[] = [
    {
      JobID: 1,
      JobCode: "HO/001",
      Title: "Manager - Rotating Equipment",
      Location: "Chennai",
      Qualification: "Degree / Diploma",
      Experience: "10-15 Yrs",
      Description: `<p>As the Rotating Equipment Manager you will be responsible for the following:</p>
      <ul>
        <li><span class="icon-bull">&bull;</span>Minimum 7 years of related working experience in process industry within rotating equipment maintenance field activities</li>
        <li><span class="icon-bull">&bull;</span>Strong knowledge on rotating equipment maintenance, knowledge of Turbines OR Centrifugal Compressors, OR Reciprocating Compressors, OR Blowers, Boosters and their auxiliaries</li>
        <li><span class="icon-bull">&bull;</span>Plan, organize, lead and control maintenance services of rotating equipment;</li>
        <li><span class="icon-bull">&bull;</span>Identify technical problems/opportunities and engineers out maintenance</li>
        <li><span class="icon-bull">&bull;</span>Excellent English fluency both spoken and written</li>
        <li><span class="icon-bull">&bull;</span>Availability to frequent travel</li>
        <Li><span class="icon-bull">&bull;</span>Strong analytic and problem solving skills together with good interpersonal and organizational skills</li>
        <li><span class="icon-bull">&bull;</span>Knowledge in business development is added advantage.</li>
        <li><span class="icon-bull">&bull;</span>Capability to handle stress situations</li>
      </ul>
      `,
      IsActive: true
    },
    {
      JobID: 1,
      JobCode: "HO/002",
      Title: "MIG Welder",
      Location: "Chennai",
      Qualification: "ITI",
      Experience: "2-5Yrs",
      Description: `
      <ul>
        <li><span class="icon-bull">&bull;</span>To perform MIG welding based on the requirements.</li>
        <li><span class="icon-bull">&bull;</span>Fabricate and assemble the material as per drawings.</li>
        <li><span class="icon-bull">&bull;</span>Should have worked in Fabrication or Process Industries where welding plays a major role.</li>
        <li><span class="icon-bull">&bull;</span>Should have basic knowledge in understand drawings & welding symbols.</li>
        <li><span class="icon-bull">&bull;</span>Repair machinery and other components by welding pieces and filling gaps.</li>
        <li><span class="icon-bull">&bull;</span>Test and inspect welded surfaces and structure to discover flaws.</li>
        <li><span class="icon-bull">&bull;</span>Maintain equipment in a condition that does not compromise safety.</li>
        <li><span class="icon-bull">&bull;</span>Assembling within the scheduled time frame.</li>
        <li><span class="icon-bull">&bull;</span>Handling & maintenance of tools, machines and components.</li>        
      </ul>
      `,
      IsActive: true
    }
  ];
  /*applyForm: FormGroup;
  submitted: boolean = false;
  charPattern = "^[a-zA-Z0-9_-]*$"
  mobilePattern = "^[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";*/

  constructor(private js: CommonService) { }

  ngOnInit(): void {
    /*this.applyForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(this.charPattern)]],
      contactNo: ['', [Validators.required, Validators.pattern(this.mobilePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      location: ['', Validators.required],
      jobCode: ['', Validators.required],
      resume: ['', Validators.required],
    });*/
    //    this.getAllJobs();

  }

  /*get f() {
    return this.applyForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.applyForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.applyForm.value, null, 4))

  }*/

  /*getAllJobs() {
    this.js.getAllJobs().subscribe(data => this.jobs = data);
  }*/



}

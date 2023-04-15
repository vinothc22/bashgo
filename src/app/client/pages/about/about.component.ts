import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bashgo-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  bannerImage: any = 'about-image.jpg';
  keyPersonnels: any[] = [
    { id: "1", name: "Periyathiruvadi Gomathinayagam", avator: "/assets/images/key-personnels/Gomathinayagam.jpg", description: "Director and Founder of BASHGO and he is responsible for the direction and management of the company's development in the India, as well as management of a long-standing business unit that was headquartered in Chennai, India. He previously held the positions of Vice President and General Manager at similar type of industrial service provider. Mr.Gomathinagayam acquired knowledge over a period of 40 years with engineer background. He is having a passion to share the knowledge of his expertise." },
    { id: "2", name: "Raju Balamurugan", avator: "/assets/images/key-personnels/RajuBalamurugan.jpg", description: "Director a Mechanical Engineering co-promoter of Bashgo. In 2005 he identified a niche Business Opportunity in the shutdown project and thus came about a Manpower Supply division which he heads today. He is biggest contributor in establishing & expanding Manpower Division.  RajuBalamurugan has been instrumental in growth of BASHGO. Under his leadership the company has become largest Technical Staffing Company in India. He is instrumental in setting up offices in Singapore, Malaysia and UAE." },
    { id: "3", name: "Dr. Shanmugar Raju", avator: "/assets/images/key-personnels/ShanmugarRaju.jpg", description: "Director of BASHGO, holds a MBA in International Business from Staffordshire University in United Kingdom and Master of Computer Application from Madras University, Chennai. He has over 18+ years of experience in marketing and business development with companies including industrial alliance. He has served as Manager, System Administrator of Software companies with multimedia expertise and EAM. He is responsible for sourcing new ventures from European country and capable of making the due diligence report by financially and technically. He holds Directorship of our far-east operations." },
    { id: "4", name: "Ramasami", avator: "/assets/images/key-personnels/Ramasami.jpg", description: "DGM has started his career in L&T and took a senior position in Sakthi High Tech. Mr. Ramasami is capable of executing the job related to fabrication of fan, blower, pipe line etc., He hold the mechanical engineering diploma with vast experience in executing the project on site as well as offsite. Currently he is managing our operation in Singapore. To his credit he has handled many shutdown recruiting and mobilizing the team of people and executes the shutdown on time." }
    /*{ id: "5", name: "Kannadasan", avator: "/assets/images/key-personnels/Kannadasan.jpg", description: "Manager has completed his diploma in mechanical engineering. He started his career in Birla cements. He is having overall 20+ years of experience in rotating and static equipment Operation & Maintenance, Overhauling, Installation & Commissioningin Power, Cement, Refinery, Steel&Distillationplants.He has done Implementation and Data collection for RCM.During his 20+ years of experience he had acquired optimum level of maintenance equipment like Gas Booster, Gas blowers,Gas turbines, steam turbines, Pumps, furnace fired and heat recovery boiler and other utilities." },
    { id: "6", name: "Pandiselvam", avator: "/assets/images/key-personnels/Pandiselvam.jpg", description: "Project Manager has completed Bachelor in Engineering has started his career in VD Swami & Company as Trainee Engineer. Mr.Pandiselvam has capable of handling projects in Thermal and Solar Power Plants. In Thermal plant he has good experience in Structural and Pressure Part erection. In Solar from Project management to DC Works. Project analysis, Planning, scheduling and site management are key areas of him. Capable of handling contract management." }*/
  ];

  constructor() { }


  ngOnInit(): void {
  }

}

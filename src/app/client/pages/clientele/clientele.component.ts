import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bashgo-clientele',
  templateUrl: './clientele.component.html',
  styleUrls: ['./clientele.component.scss']
})
export class ClienteleComponent implements OnInit {

  bannerImage: string = 'clientele-image.jpg';
  clients: any[] = [
    {
      id: '1', clientLoc: 'Indian Clients', clientNames: [
        { id: "1", clientName: "ACE Renewtech Consulting Engineers" },
        { id: "2", clientName: "Alagappa Engineering Company" },
        { id: "3", clientName: "Anco India Chemical Private Limited" },
        { id: "4", clientName: "BMM Ispat Limited" },
        { id: "5", clientName: "Bhagayanagar Solvent Extractions Private Limited" },
        { id: "6", clientName: "Cairn Energy India Pty Limited" },
        { id: "7", clientName: "Chemtrols Industries Limited" },
        { id: "8", clientName: "Comstar Automotive Technologies Private Limited" },
        { id: "9", clientName: "DeDietrich Process Systems Limited" },
        { id: "10", clientName: "Fisher Sanmar Limited" },
        { id: "11", clientName: "Fuso Glass India Pvt Ltd." },
        { id: "12", clientName: "Futura Polymers Limited" },
        { id: "13", clientName: "Hardy Exploration &Production(INDIA) Inc." },
        { id: "14", clientName: "Hindustan Zinc Limited" },
        { id: "15", clientName: "Hofinsoft Technologies Private Limited" },
        { id: "16", clientName: "Hospet Steel Limited" },
        { id: "17", clientName: "Hospira Healthcare India Private Limited" },
        { id: "18", clientName: "Jhagadia Copper Limited" },
        { id: "19", clientName: "JSW Steel Limited" },
        { id: "20", clientName: "Kumudam Publications Private Limited" },
        { id: "21", clientName: "L&T Shipbuilding Limited" },
        { id: "22", clientName: "Nagarjuna Oil Corporation Limited" },
        { id: "23", clientName: "Navsar Engineering International Private Limited" },
        { id: "24", clientName: "Orchid Chemical & Pharmaceuticals Limited" },
        { id: "25", clientName: "Pfizer India Limited" },
        { id: "26", clientName: "Rane Madras Limited" },
        { id: "27", clientName: "Ratna Cafe Private Limited" },
        { id: "28", clientName: "Reliance Engineering Associates Private Limited" },
        { id: "29", clientName: "Reliance Industries Limited" },
        { id: "30", clientName: "Reliance Petroleum Limited" },
        { id: "31", clientName: "ROTO Polymers and Chemicals Private Limited" },
        { id: "32", clientName: "Seshasayee Paper and Boards Limited" },
        { id: "33", clientName: "Southern Iron and Steel Company Limited" },
        { id: "34", clientName: "Sterlite Industries (INDIA)Limited" },
        { id: "35", clientName: "Sunil Healthcare Limited" },
        { id: "36", clientName: "The Madras Aluminium Company Limited" },
        { id: "37", clientName: "Tamil Nadu Newsprint and Papers Limited" },
        { id: "38", clientName: "Universal Heat exchangers Limited" },
        { id: "39", clientName: "Wheels India Limited" }
      ]
    },
    {
      id: '2', clientLoc: 'Abroad Clients', clientNames: [
        { id: "1", clientName: "Advance Petrochemical  Company" },
        { id: "2", clientName: "Applied Maintenance  Solution SDN .BHD" },
        { id: "3", clientName: "Akra Engineering SDN BHD" },
        { id: "4", clientName: "Consolidated Contractors Co.Kwait W.L.L" },
        { id: "5", clientName: "Cutech Quality Solution Private Limited" },
        { id: "6", clientName: "ETA STAR International LLC" },
        { id: "7", clientName: "Gulf Spic General Trading & Contracting Co.WLL" },
        { id: "8", clientName: "KhalifaDajj Al- Dabbous& Brothers Co Ltd" },
        { id: "9", clientName: "Mannai Trading Company W.L.L" },
        { id: "10", clientName: "Manweir LLC" },
        { id: "12", clientName: "Plant Engineering Constructions Limited" },
        { id: "12", clientName: "Perfect Industries LLC" },
        { id: "13", clientName: "Ras Trading & Services Est" },
        { id: "14", clientName: "Saudi Basic Industries Corporation" }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

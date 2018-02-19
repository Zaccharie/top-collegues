import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-collegue-tableau',
  templateUrl: './collegue-tableau.component.html',
  styleUrls: ['./collegue-tableau.component.css']
})
export class CollegueTableauComponent implements OnInit {

  collegues: Collegue[];
  limiteAffichage: string = "0";
  showTable: boolean = true;

  constructor(private collService: CollegueService) { }

  ngOnInit() {
    this.collService.listerCollegues()
      .then(tabCollegues => this.collegues = tabCollegues)
      .then(() => this.limiteAffichage = this.collegues.length.toString());
  }

  nouveauJaime() {
    this.collService.listerCollegues()
      .then(tabCollegues => this.collegues = tabCollegues);
  }

  nouveauDeteste() {
    this.collService.listerCollegues()
      .then(tabCollegues => this.collegues = tabCollegues);
  }

  limit(nombre: HTMLInputElement) {
    console.log(nombre.value)
    if (nombre.value.toString() == "" || nombre.value.toString().startsWith(" ")) {
      this.showTable = true;
      this.limiteAffichage = this.collegues.length.toString();
    }
    else if( nombre.value.toString() == "0"){
      this.showTable = false;
    }
    else {
      this.showTable = true;
      this.limiteAffichage = nombre.value.toString();
    }
  }

}

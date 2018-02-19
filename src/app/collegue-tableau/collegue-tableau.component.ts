import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-collegue-tableau',
  templateUrl: './collegue-tableau.component.html',
  styleUrls: ['./collegue-tableau.component.css']
})
export class CollegueTableauComponent implements OnInit {

  collegues:Collegue[];
  limiteAffichage:string;

  constructor(private collService: CollegueService) { }

  ngOnInit() {
    this.collService.listerCollegues()
    .then(tabCollegues => this.collegues = tabCollegues)
    .then(() => this.limiteAffichage = this.collegues.length.toString() );
  }

  nouveauJaime(){
    this.collService.listerCollegues()
    .then(tabCollegues => this.collegues = tabCollegues);
  }

  nouveauDeteste(){
    this.collService.listerCollegues()
    .then(tabCollegues => this.collegues = tabCollegues);
  }

  limit(nombre:HTMLInputElement){
    console.log(nombre);
    this.limiteAffichage = nombre.value;
  }

}

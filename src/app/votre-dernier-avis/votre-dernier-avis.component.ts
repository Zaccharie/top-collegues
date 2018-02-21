import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {

  collegueNom:string = "";
  displayJaime:boolean = false;
  displayDeteste:boolean = false;
  displayNoVote:boolean = true;

  constructor(private collService: CollegueService) { }

  ngOnInit() {
    //Mise à jour du dernier avis
    this.collService.getAvisSubject().subscribe(collegue => {
      this.collegueNom = collegue.nom;
      if(collegue.value == "jaime"){
        this.displayDeteste = false;
        this.displayNoVote = false;
        this.displayJaime = true;
      }
      else if(collegue.value == "deteste"){
        this.displayJaime = false;
        this.displayNoVote = false;
        this.displayDeteste = true;
      }
    });
  }
}

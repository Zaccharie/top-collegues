import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-collegue-classique',
  templateUrl: './collegue-classique.component.html',
  styleUrls: ['./collegue-classique.component.css']
})
export class CollegueClassiqueComponent implements OnInit {
  
  collegues:Collegue[] = [];
  limiteAffichage:string = "0";
  pseudoSearch:string = "";
  colleguesSub: Subscription;

  constructor(private collService: CollegueService) {
    
   }

  ngOnInit() {
    this.collService.listerCollegues()
    .subscribe(tabCollegues => {
      this.collegues = tabCollegues;
      this.limiteAffichage = this.collegues.length.toString();
    })
   
    //Mise à jour du tableau de collegues et de la limite d'affichage
    this.collService.getCollegueSubject().subscribe(tabCollegues => {
                                            this.collegues = tabCollegues;
                                            this.limiteAffichage = this.collegues.length.toString();
                                          });
  }

  limit(nombre:HTMLInputElement){
    this.limiteAffichage = nombre.value.toString();
    if(this.limiteAffichage.length == 0){ //affiche les collegues si conditions limit sont effacées
      this.limiteAffichage  = this.collegues.length.toString();
    }
  }

  filterSearch(pseudoChar:HTMLInputElement){
    this.pseudoSearch = pseudoChar.value.toString();
  } 

}

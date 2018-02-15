import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-collegue-form-component',
  templateUrl: './collegue-form-component.component.html',
  styleUrls: ['./collegue-form-component.component.css']
})
export class CollegueFormComponent implements OnInit {

  collegues: Collegue[] = [];
  messageTimeOut: number;
  successMessage: boolean = false;
  pseudoErrorMessage: boolean = false;
  pseudoSauvegarde: string

  constructor(private collService: CollegueService) { }

  ngOnInit() {
    this.collService.listerCollegues()
      .then(tabCollegues => this.collegues = tabCollegues);
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    let newCollegue = new Collegue(pseudo.value, imageUrl.value, 0);
    this.collService.sauvegarder(newCollegue)
      .then(tabCollegues => {
        this.collegues = tabCollegues;

        //sauvegarde du pseudo pour le message d'alerte
        this.pseudoSauvegarde = pseudo.value;

        //message d'alerte
        this.successMessage = true

        //reinitialisation des champs
        pseudo.value = "";
        imageUrl.value = "";
      })
      .catch((Status) => {
        this.pseudoErrorMessage = true;
      });

    return false; //pour éviter le rechargement de la page
  }

}

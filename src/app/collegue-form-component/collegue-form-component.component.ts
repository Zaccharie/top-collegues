import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { CollegueService } from '../shared/service/collegue.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

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
  pseudoSauvegarde: string;
  colleguesSub: Subscription;

  constructor(private collService: CollegueService, private router: Router) { }

  ngOnInit() {
    this.collService.listerCollegues()
      .subscribe(tabCollegues => this.collegues = tabCollegues);
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    let newCollegue = new Collegue(pseudo.value, imageUrl.value, 0);
    this.collService.sauvegarder(newCollegue)
      .subscribe(colleguesTab => {
        this.collegues = colleguesTab;

        //sauvegarde du pseudo pour le message d'alerte
        this.pseudoSauvegarde = pseudo.value;
        //autoriser message d'alerte
        this.successMessage = true;

        //reinitialisation des champs
        pseudo.value = ""
        imageUrl.value = ""
      },
      error => this.pseudoErrorMessage = true)

    return false; //pour éviter le rechargement de la page
  }

  afficherFormAndNav() {
    return ['/tableau', '/classique', '/caroussel'].some(route => route == this.router.url);
  }

}

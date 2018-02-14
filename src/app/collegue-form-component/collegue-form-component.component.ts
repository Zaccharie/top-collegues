import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { debounceTime } from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-collegue-form-component',
  templateUrl: './collegue-form-component.component.html',
  styleUrls: ['./collegue-form-component.component.css']
})
export class CollegueFormComponent implements OnInit {

  collegues: Collegue[] = [];
  messageTimeOut: number;
  successMessage: boolean = false;
  pseudoSauvegarde:string

  constructor() { }

  ngOnInit() {
    let c1 = new Collegue("Zaccharie", "assets/namelessG.jpg", 100);
    let c2 = new Collegue("Jordan", "assets/namelessG.jpg", 80);
    let c3 = new Collegue("Leila", "assets/namelessG.jpg", 10);
    let c4 = new Collegue("Rémi", "assets/namelessG.jpg", 20);
    let c5 = new Collegue("Vincent", "assets/namelessG.jpg", 95);
    this.collegues.push(c1, c2, c3, c4, c5);
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    let newCollegue = new Collegue(pseudo.value, imageUrl.value, 0);
    this.collegues.push(newCollegue);

    //sauvegarde du pseudo pour le message d'alerte
    this.pseudoSauvegarde = pseudo.value;

    //message d'alerte
    this.successMessage = true

    //reinitialisation des champs
    pseudo.value = "";
    imageUrl.value = "";

    return false; //pour éviter le rechargement de la page
  }

}

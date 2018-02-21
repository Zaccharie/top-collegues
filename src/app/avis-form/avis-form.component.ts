import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Avis } from '../shared/domain/avis';
import { Collegue } from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-avis-form',
  templateUrl: './avis-form.component.html',
  styleUrls: ['./avis-form.component.css']
})
export class AvisFormComponent implements OnInit {

  //parametre d'entrée "collegue"
  @Input() collegue:Collegue;
  @Output() enregistrer = new EventEmitter();
  avis:Avis

  constructor(private collService:CollegueService) { }

  ngOnInit() {
    this.avis  = new Avis(this.collegue, "");
  }

  submit(){
    console.log(this.avis);
    this.enregistrer.emit()
    this.collService.ajouterUnAvis(this.avis)
      .subscribe( () => {console.log(this.avis)} );
      return false;
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from "../shared/domain/collegue";
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

   //parametre d'entrée "collegue"
   @Input() collegue:Collegue;
   @Output() change = new EventEmitter();

  constructor(private collService: CollegueService) { }

  ngOnInit() {
  }

  jaime(){
    this.collService.aimerUnCollegue(this.collegue)
      .then(collegueUpdate => this.collegue = collegueUpdate)
      .then(() => this.change.emit());
  }

}

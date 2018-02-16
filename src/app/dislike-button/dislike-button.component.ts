import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from "../shared/domain/collegue";
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-dislike-button',
  templateUrl: './dislike-button.component.html',
  styleUrls: ['./dislike-button.component.css']
})
export class DislikeButtonComponent implements OnInit {

  //parametre d'entrée "collegue"
  @Input() collegue: Collegue;
  @Output() change = new EventEmitter();

  constructor(private collService: CollegueService) { }

  ngOnInit() {
  }

  jedeteste(){
    this.collService.detesterUnCollegue(this.collegue)
      .then(collegueUpdate => this.collegue = collegueUpdate)
      .then(() => this.change.emit()); 
  }

}

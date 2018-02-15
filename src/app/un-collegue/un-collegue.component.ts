import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from "../shared/domain/collegue";
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  //parametre d'entrée "collegue"
  @Input() collegue:Collegue;

  constructor(private collService: CollegueService) { }

  ngOnInit() {
  }

  jaime(){
    this.collService.aimerUnCollegue(this.collegue)
      .then(collegueUpdate => this.collegue = collegueUpdate); 
  }

  jedeteste(){
    this.collService.detesterUnCollegue(this.collegue)
      .then(collegueUpdate => this.collegue = collegueUpdate); 
  }

}

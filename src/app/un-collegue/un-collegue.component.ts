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

  collegues:Collegue[]

  constructor(private collService: CollegueService) { }

  ngOnInit() {
    this.collService.listerCollegues()
    .subscribe(tabCollegues => this.collegues = tabCollegues);
  }

  nouveauJaime(){
    this.collegue.score += 10;
  }

  nouveauDeteste(){
    this.collegue.score -= 10;
  }

}

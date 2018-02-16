import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-collegue-caroussel',
  templateUrl: './collegue-caroussel.component.html',
  styleUrls: ['./collegue-caroussel.component.css']
})
export class CollegueCarousselComponent implements OnInit {


  collegues:Collegue[];

  constructor(private collService: CollegueService) { }

  ngOnInit() {
    this.collService.listerCollegues()
    .then(tabCollegues => this.collegues = tabCollegues);
  }

  nouveauJaime(collegue:Collegue){
    collegue.score += 10;
  }

  nouveauDeteste(collegue:Collegue){
    collegue.score -= 10;
  }

}

import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-collegue-tableau',
  templateUrl: './collegue-tableau.component.html',
  styleUrls: ['./collegue-tableau.component.css']
})
export class CollegueTableauComponent implements OnInit {

  collegues:Collegue[];

  constructor(private collService: CollegueService) { }

  ngOnInit() {
    this.collService.listerCollegues()
    .then(tabCollegues => this.collegues = tabCollegues);
  }

  nouveauJaime(){
    this.collService.listerCollegues()
    .then(tabCollegues => this.collegues = tabCollegues);
  }

  nouveauDeteste(){
    this.collService.listerCollegues()
    .then(tabCollegues => this.collegues = tabCollegues);
  }

}

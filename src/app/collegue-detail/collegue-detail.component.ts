import { Component, OnInit } from '@angular/core';
import { Collegue } from "../shared/domain/collegue";
import { CollegueService } from '../shared/service/collegue.service';
import { ActivatedRoute } from '@angular/router';
import { CollegueTableauComponent } from '../collegue-tableau/collegue-tableau.component';

@Component({
  selector: 'app-collegue-detail',
  templateUrl: './collegue-detail.component.html',
  styleUrls: ['./collegue-detail.component.css']
})
export class CollegueDetailComponent implements OnInit {

  collegue:Collegue = new Collegue("","",0);
  nomParam:string;
  
  constructor(private route:ActivatedRoute, private collegueService:CollegueService) {
    route.params.subscribe(params => {this.nomParam = params['pseudo'];});
   }

  ngOnInit() {
    this.collegueService.afficherCollegue(this.nomParam)
      .subscribe( co => this.collegue = co );
  }

  nouveauJaime(collegue:Collegue){
    this.collegue.score += 10;
  }

  nouveauDeteste(collegue:Collegue){
    this.collegue.score -= 10;
  }

}

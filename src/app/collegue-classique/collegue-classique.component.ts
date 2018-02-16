import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-collegue-classique',
  templateUrl: './collegue-classique.component.html',
  styleUrls: ['./collegue-classique.component.css']
})
export class CollegueClassiqueComponent implements OnInit {
  
  collegues:Collegue[];

  constructor(private collService: CollegueService) { }

  ngOnInit() {
    this.collService.listerCollegues()
    .then(tabCollegues => this.collegues = tabCollegues);
  }

}

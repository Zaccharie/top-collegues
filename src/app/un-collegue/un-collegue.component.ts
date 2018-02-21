import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
  closeResult: string;
  collegues:Collegue[];

  constructor(private collService: CollegueService, private modalService: NgbModal) { }

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

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

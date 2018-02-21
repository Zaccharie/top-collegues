import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-collegue-tableau',
  templateUrl: './collegue-tableau.component.html',
  styleUrls: ['./collegue-tableau.component.css']
})
export class CollegueTableauComponent implements OnInit {

  collegues: Collegue[];
  limiteAffichage: string = "0";
  showTable: boolean = true;
  closeResult: string;

  constructor(private collService: CollegueService, private modalService: NgbModal) { }

  ngOnInit() {
    this.collService.listerCollegues()
      .subscribe(tabCollegues => {
        this.collegues = tabCollegues;
        this.limiteAffichage = this.collegues.length.toString();
      })

    //Mise à jour du tableau de collegues et de la limite d'affichage
    this.collService.getCollegueSubject().subscribe(tabCollegues => {
                                            this.collegues = tabCollegues;
                                            this.limiteAffichage = this.collegues.length.toString();
                                          });
  }

  nouveauJaime() {
    this.collService.listerCollegues()
      .subscribe(tabCollegues => this.collegues = tabCollegues);
  }

  nouveauDeteste() {
    this.collService.listerCollegues()
      .subscribe(tabCollegues => this.collegues = tabCollegues);
  }

  limit(nombre: HTMLInputElement) {
    console.log(nombre.value)
    if (nombre.value.toString() == "" || nombre.value.toString().startsWith(" ")) {
      this.showTable = true;
      this.limiteAffichage = this.collegues.length.toString();
    }
    else if (nombre.value.toString() == "0") {
      this.showTable = false;
    }
    else {
      this.showTable = true;
      this.limiteAffichage = nombre.value.toString();
    }
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

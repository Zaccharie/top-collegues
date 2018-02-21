import { Collegue } from "./collegue"

export class Avis {

    collegue:Collegue;
    commentaire:string;

    constructor(collegue, commentaire){
        this.collegue = collegue;
        this.commentaire = commentaire;
    }
}

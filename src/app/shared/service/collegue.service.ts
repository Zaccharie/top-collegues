import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CollegueService {

  constructor(private http:HttpClient) { }

  listerCollegues():Promise<Collegue[]>{
    return this.http.get<any[]>("http://localhost:8080/collegues").toPromise()
      .then(tabCollegues => tabCollegues.map(col => new Collegue(col.nom,col.imgUrl, col.score))) ;
  }

  sauvegarder(newCollegue:Collegue):Promise<Collegue[]>{
    return this.http.post<Collegue[]>('http://localhost:8080/collegues', newCollegue).toPromise()
      .then(tabCollegues => tabCollegues.map(col => new Collegue(col.nom, col.imgUrl, col.score)));
  }

  aimerUnCollegue(unCollegue:Collegue):Promise<Collegue>{
    let array = {"action":"aimer"}
    return this.http.patch<Collegue>(`http://localhost:8080/collegues/${unCollegue.nom}`, array).toPromise();
  }

  detesterUnCollegue(unCollegue:Collegue):Promise<Collegue>{
    let array = {"action":"detester"}
    return this.http.patch<Collegue>(`http://localhost:8080/collegues/${unCollegue.nom}`, array).toPromise();
  }

}

import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Avis } from '../domain/avis';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CollegueService {

  private collegueSubject = new Subject<Collegue[]>();
  private unCollegueSubject = new Subject<Collegue>();
  private avisSubject = new Subject<any>();
  private isOnline: Observable<boolean>;

  constructor(private http:HttpClient) {
    this.isOnline = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));
   }

  getNetworkStatus(){
    return this.isOnline;
  }

  getCollegueSubject(): Observable<any> {
    return this.collegueSubject.asObservable(); 
  }

  getAvisSubject(): Observable<any> {
    return this.avisSubject.asObservable();
  }

  listerCollegues():Observable<Collegue[]>{
    return this.http.get<any[]>("http://localhost:8080/collegues");
  }

  sauvegarderBackup(newCollegue:Collegue):Observable<Collegue[]>{

    const observableHttp =  this.http.post<Collegue[]>('http://localhost:8080/collegues', newCollegue);
    
    observableHttp.subscribe(v => {
      this.collegueSubject.next(v)
    }, err => this.collegueSubject.error(err));

    return this.collegueSubject;
  }

  sauvegarder(newCollegue:Collegue):Observable<Collegue[]>{
    return this.http.post<Collegue[]>('http://localhost:8080/collegues', newCollegue)
            .map(tabCollegues => {
              this.collegueSubject.next(tabCollegues)
              return tabCollegues;
            });
  }

  aimerUnCollegue(unCollegue:Collegue):Observable<Collegue>{
    let array = {"action":"aimer"}
    return this.http.patch<Collegue>(`http://localhost:8080/collegues/${unCollegue.nom}`, array)
            .map(collegue => {
              let avis = {nom: collegue.nom, value:"jaime"};
              this.avisSubject.next(avis);
              return collegue;
            });
  }

  detesterUnCollegue(unCollegue:Collegue):Observable<Collegue>{
    let array = {"action":"detester"}
    return this.http.patch<Collegue>(`http://localhost:8080/collegues/${unCollegue.nom}`, array)
            .map(collegue => {
              let avis = {nom: collegue.nom, value:"deteste"};
              this.avisSubject.next(avis);
              return collegue;
            });
  }

  afficherCollegue(nom:string):Observable<Collegue>{
    return this.http.get<Collegue>(`http://localhost:8080/collegues/detail/${nom}`);
  }

  ajouterUnAvis(avis:Avis):Observable<Collegue>{
    return this.http.post<Collegue>('http://localhost:8080/avis/', avis)
      .map( collegue => {
        this.unCollegueSubject.next(collegue);
        return collegue;
      })
  }

}

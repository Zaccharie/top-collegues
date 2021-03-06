import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CollegueFormComponent } from './collegue-form-component/collegue-form-component.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { CollegueService } from './shared/service/collegue.service';
import { CollegueClassiqueComponent } from './collegue-classique/collegue-classique.component';
import { CollegueTableauComponent } from './collegue-tableau/collegue-tableau.component';
import { CollegueCarousselComponent } from './collegue-caroussel/collegue-caroussel.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { DislikeButtonComponent } from './dislike-button/dislike-button.component';
import { CollegueDetailComponent } from './collegue-detail/collegue-detail.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { PseudoPipe } from './shared/pipe/pseudo.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';
import { NetworkStatusComponent } from './network-status/network-status.component';
import { FormsModule } from '@angular/forms';
import { AvisFormComponent } from './avis-form/avis-form.component';

const appRoutes: Routes = [
  {path:'classique', component:CollegueClassiqueComponent},
  {path:'tableau', component:CollegueTableauComponent},
  {path:'caroussel', component:CollegueCarousselComponent},
  {path:'detail/:pseudo', component:CollegueDetailComponent},
  {path:'**', redirectTo:'classique'}
]

@NgModule({
  declarations: [
    AppComponent,
    CollegueFormComponent,
    UnCollegueComponent,
    CollegueClassiqueComponent,
    CollegueTableauComponent,
    CollegueCarousselComponent,
    LikeButtonComponent,
    DislikeButtonComponent,
    CollegueDetailComponent,
    ScorePipe,
    PseudoPipe,
    VotreDernierAvisComponent,
    NetworkStatusComponent,
    AvisFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(), //integre le module NgbModule
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

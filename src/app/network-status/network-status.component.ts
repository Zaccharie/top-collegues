import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { CollegueService } from '../shared/service/collegue.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-network-status',
  templateUrl: './network-status.component.html',
  styleUrls: ['./network-status.component.css']
})
export class NetworkStatusComponent implements OnInit {

  isOnline:boolean = false;

  constructor(private collService: CollegueService) {}

  ngOnInit() {
    this.collService.getNetworkStatus()
      .subscribe(status => {
        this.isOnline = status;
      });
  }

}

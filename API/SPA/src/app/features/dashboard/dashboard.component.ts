import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  msgs: any[] = [
    "Welcome to Explore KP"
  ];
  
  entityCounts: any;

  constructor(
    private _dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.getEntityCount();
  }

  getEntityCount(){
    this._dashboardService.GetEntityCount()
      .then(response => {
        this.entityCounts = response;
      })
  }

}

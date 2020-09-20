import { Component } from '@angular/core';
import { User } from '../../@core/data/users';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  public string = 'Hello World';
  public currentTabId: number = 1;

  public loading: boolean = true;
  public rowData: User[] = [];
  public columnDefs: any[]  = [];


  onTabChange(event: any): void {
    this.currentTabId = event.tabId;
  }

  onLoadingUpdated() {
    console.log(this.loading)
  }

  onColumnDefsChange() {
    console.log(this.columnDefs)
  }
}

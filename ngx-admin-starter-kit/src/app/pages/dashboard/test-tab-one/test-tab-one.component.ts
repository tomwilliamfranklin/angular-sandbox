import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Column } from '../../../model/column.model';
import { User } from '../../../model/user.model';

@Component({
  selector: 'ngx-test-tab-one',
  templateUrl: './test-tab-one.component.html',
  styleUrls: ['./test-tab-one.component.scss']
})
export class TestTabOneComponent implements OnInit {

  @Input()
  public headerText: string = '';

  @Input()
  public rowData: User[] = [];

  @Output()
  public headerTextChange = new EventEmitter<string>();

  @Output()
  public rowDataChange = new EventEmitter<User[]>();

  @Input()
  public loading: boolean = true;

  @Output()
  public loadingChange = new EventEmitter<boolean>();

  @Input()
  public columnDefs: Column[] = [];

  @Output()
  public columnDefsChange = new EventEmitter<Column[]>();

  constructor() { }

  async ngOnInit() {
    setTimeout(async () => {
    this.headerTextChange.emit('TAB 1');

    this.rowDataChange.emit([]);
    this.columnDefsChange.emit([]);

    // the await has to come before the columndefs for this to work because of the emit above ^.
    this.rowData =  await this.getDummyData();
    this.columnDefs =  [
      {headerName: 'id', field: 'id' },
      {headerName: 'First Name', field: 'firstName' },
      {headerName: 'Last Name', field: 'lastName'},
      {headerName: 'Email', field: 'email'},
    ];

    this.rowDataChange.emit(this.rowData);
    this.columnDefsChange.emit(this.columnDefs);
  }, 0);
  }

  async getDummyData(): Promise<User[]> {
    this.loadingChange.emit(true);

    return new Promise((resolve) => setTimeout(() => {
      this.loadingChange.emit(false);
      resolve([
        { id: 1, firstName: "tom", lastName: "franklin", email: "tomfranklin@gmail.com" },
        { id: 2, firstName: "william", lastName: "bongocloud", email: "williambongocloud@gmail.com" }
      ]);
    }, 3000));
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../../model/car.model';
import { Column } from '../../../model/column.model';

@Component({
  selector: 'ngx-test-tab-two',
  templateUrl: './test-tab-two.component.html',
  styleUrls: ['./test-tab-two.component.scss']
})
export class TestTabTwoComponent implements OnInit {

  @Input()
  public headerText: string = '';

  @Output()
  public headerTextChange = new EventEmitter<string>();

  @Input()
  public rowData: Car[] = [];

  @Output()
  public rowDataChange = new EventEmitter<Car[]>();

  @Input()
  public columnDefs: Column[] = [];

  @Output()
  public columnDefsChange = new EventEmitter<Column[]>();

  @Input()
  public loading: boolean = false;

  @Output()
  public loadingChange = new EventEmitter<boolean>();


  constructor() { }

  async ngOnInit() {
    this.headerTextChange.emit('TAB 2');
    this.rowData =  await this.getDummyData();
    this.columnDefs = [{headerName: 'id', field: 'id' },
    {headerName: 'Name', field: 'name' },
    {headerName: 'Milage', field: 'milage' },
    {headerName: 'Wheel Count', field: 'wheels' }
  ],

    this.rowDataChange.emit(this.rowData);
    this.columnDefsChange.emit(this.columnDefs);
  }

  async getDummyData(): Promise<Car[]> {
    this.loadingChange.emit(true);

    return new Promise((resolve) => setTimeout(() => {
      this.loadingChange.emit(false);

      resolve([
        { id: 1, name: "Vauxhall Corsa 2016", milage: 25495, wheels: 4},
        { id: 2, name: "Fiat 3000", milage: 56064, wheels: 4},
      ]);
    }, 3000));
  }
}

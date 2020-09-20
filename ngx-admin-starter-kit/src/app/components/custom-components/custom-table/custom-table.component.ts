import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input()
  public rowData = [];

  @Output()
  public rowDataChange = new EventEmitter<any>();

  @Input()
  public columnDefs = [];

  @Output()
  public columnDefsChange = new EventEmitter<any>();

  @Input()
  public loading: boolean = false;

  @Output()
  public loadingChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}

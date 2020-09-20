import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { NbSpinnerModule } from '@nebular/theme';



@NgModule({
  declarations: [CustomTableComponent],
  imports: [
    CommonModule,
    AgGridModule,
    NbSpinnerModule,
  ],
  exports: [
    CustomTableComponent,
  ],
})
export class CustomComponentsModule { }

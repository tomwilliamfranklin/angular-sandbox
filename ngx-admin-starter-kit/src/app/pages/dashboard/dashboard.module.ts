import { NgModule } from '@angular/core';
import { NbCardModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';

import { ThemeModule } from '../../@theme/theme.module';
import { CustomComponentsModule } from '../../components/custom-components/custom-components.module';
import { DashboardComponent } from './dashboard.component';
import { TestTabOneComponent } from './test-tab-one/test-tab-one.component';
import { TestTabTwoComponent } from './test-tab-two/test-tab-two.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbTabsetModule,
    AgGridModule,
    NbSpinnerModule,
    CustomComponentsModule,
  ],
  declarations: [
    DashboardComponent,
    TestTabOneComponent,
    TestTabTwoComponent,
  ],
})
export class DashboardModule {



 }

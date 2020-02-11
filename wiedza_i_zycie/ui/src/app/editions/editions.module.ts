import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDependenciesModule } from '../shared-dependencies/shared-dependencies.module'
import { EditionsCardComponent } from './editions-card/editions-card.component';
import { EditionDetalisComponent } from './edition-detalis/edition-detalis.component'
import { EditionsGridComponent } from './editions-grid/editions-grid.component'
import { EditionsComponent } from './editions.component'
import { WizDataService } from './wiz-data.service';
import { NavCommunicationService } from 'src/app/shared/nav-communication.service';
import { SharedModule } from 'src/app/shared/shared.module'


@NgModule({
  imports: [
    CommonModule,
    SharedDependenciesModule,
    SharedModule,
  ],
  providers: [
    WizDataService,
    NavCommunicationService,
  ],
  declarations: [
    EditionsCardComponent,
    EditionDetalisComponent,
    EditionsGridComponent,
    EditionsComponent,
  ],
  exports: [
    EditionsComponent,
  ]
})
export class EditionsModule { }

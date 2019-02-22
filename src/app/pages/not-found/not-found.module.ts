import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found.component';
import { SharedModule } from './../../shared/modules/shared.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    SharedModule
  ]
})
export class NotFoundModule { }

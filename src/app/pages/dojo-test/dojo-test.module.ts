import { NgModule } from '@angular/core';

import { DojoTestComponent } from './dojo-test.component';
import { SharedModule } from './../../shared/modules/shared.module';
import { DojoTestRoutingModule } from './dojo-test-routing.module';

@NgModule({
  declarations: [
    DojoTestComponent
  ],
  imports: [
    SharedModule,
    DojoTestRoutingModule
  ]
})
export class DojoTestModule { }

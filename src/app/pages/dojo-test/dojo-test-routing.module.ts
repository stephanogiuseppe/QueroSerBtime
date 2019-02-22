import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DojoTestComponent } from './dojo-test.component';

const routes: Routes = [
  { path: '', component: DojoTestComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DojoTestRoutingModule { }

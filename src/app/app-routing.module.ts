import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'test', loadChildren: './pages/dojo-test/dojo-test.module#DojoTestModule' },
  { path: '', pathMatch: 'full', redirectTo: '/test' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

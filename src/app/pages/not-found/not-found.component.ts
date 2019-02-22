import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  template: `<h2>{{ 'pages.not-found.title' | translate }}</h2>`,
  styles: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
  }

  ngOnInit() { }
}

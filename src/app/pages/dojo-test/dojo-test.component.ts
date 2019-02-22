import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dojo-test',
  templateUrl: './dojo-test.component.html',
  styleUrls: ['./dojo-test.component.scss']
})
export class DojoTestComponent implements OnInit {

  public MONEY_ARRAY = [ 100, 50, 10, 5, 1, 0.5, 0.1, 0.05, 0.01 ];
  public changeMoneyForm: FormGroup;
  public result = [];

  constructor(
    public translate: TranslateService
  ) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
  }

  ngOnInit() {
    this.changeMoneyForm = new FormGroup({
      priceControl: new FormControl(null, Validators.required),
      moneyControl: new FormControl(null, Validators.required),
    });

    this.changeMoneyForm.valueChanges.subscribe(() => {
      if (this.changeMoneyForm.valid) {
        this.getMoneyChangeArray(this.changeMoneyForm.controls.priceControl.value, this.changeMoneyForm.controls.moneyControl.value);
      }
    });
  }

  public sortReverseNumberArray = (arr: number[] = []): number[] => {
    return arr.sort((a,b) => a - b).reverse();
  }

  public paymentValid = (productPrice, paymentValue): boolean => {
    return productPrice <= paymentValue;
  }

  public getTotalChange = (productPrice, paymentValue): number => {
    if (this.paymentValid(productPrice, paymentValue)) {
      return paymentValue - productPrice;
    }
    return 0;
  }

  public getMoneyChangeArray = (productPrice, paymentValue): number[] => {
    let money = 0;
    const moneyChangeArray = [];
    let totalValue: number = this.getTotalChange(productPrice, paymentValue);
    if (totalValue) {
      const moneys = this.sortReverseNumberArray(this.MONEY_ARRAY);
      while (totalValue > 0) {
        money = parseFloat(moneys.filter(b => b <= totalValue)[0].toFixed(2));
        totalValue = parseFloat(totalValue.toFixed(2)) - parseFloat(money.toFixed(2));
        moneyChangeArray.push(money);
      }
    }
    this.result = moneyChangeArray;
    return moneyChangeArray;
  }
}

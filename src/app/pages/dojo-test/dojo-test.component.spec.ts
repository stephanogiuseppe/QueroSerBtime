import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DojoTestComponent } from './dojo-test.component';
import { HttpLoaderFactory } from 'src/app/shared/modules/shared.module';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('DojoTestComponent', () => {
  let component: DojoTestComponent;
  let fixture: ComponentFixture<DojoTestComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    const translateOptions = {
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    };

    TestBed.configureTestingModule({
      declarations: [ DojoTestComponent ],
      providers: [ { provide: FormBuilder, useValue: formBuilder } ],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot(translateOptions),
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DojoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('=> sort money array:', function() {
    it('should be return empty array if parameter is empty', function() {
      expect(component.sortReverseNumberArray).toBeDefined();
      expect(component.sortReverseNumberArray()).toEqual([]);
    });

    it('should be return sort array', function() {
      expect(component.sortReverseNumberArray).toBeDefined();
      expect(component.sortReverseNumberArray([100, 1, 5, 10])).toEqual([100, 10, 5, 1]);
    });
  });

  describe('=> payment validation:', function() {
    it('should be return false if payment smaller than product value', function() {
      expect(component.paymentValid).toBeDefined();
      expect(component.paymentValid(100, 90)).toBeFalsy();
    });

    it('should be return true if payment bigger or equal than product value', function() {
      expect(component.paymentValid).toBeDefined();
      expect(component.paymentValid(90, 100)).toBeTruthy();
      expect(component.paymentValid(100, 100)).toBeTruthy();
    });
  });

  describe('=> change value validation:', function() {
    it('should be return false to payment invalid', function() {
      expect(component.getTotalChange).toBeDefined();
      expect(component.getTotalChange(90, 80)).toBeFalsy();
    });

    it('should be return value of change', function() {
      expect(component.getTotalChange).toBeDefined();
      expect(component.getTotalChange(90, 100)).toEqual(10);
    });
  });

  describe('=> change array validation:', function() {
    it('should be return empty array of money change', function() {
      expect(component.getMoneyChangeArray).toBeDefined();
      expect(component.getMoneyChangeArray(100, 50)).toEqual([]);
    });

    it('should be return array of money change', function() {
      expect(component.getMoneyChangeArray).toBeDefined();
      expect(component.getMoneyChangeArray(3, 500)).toEqual([100, 100, 100, 100, 50, 10, 10, 10, 10, 5, 1, 1]);
      expect(component.getMoneyChangeArray(89, 100)).toEqual([10, 1]);
      expect(component.getMoneyChangeArray(4.45, 10)).toEqual([5, 0.5, 0.05]);
      expect(component.getMoneyChangeArray(2.46, 10)).toEqual([5, 1, 1, 0.5, 0.01, 0.01, 0.01, 0.01]);
    });
  });
});

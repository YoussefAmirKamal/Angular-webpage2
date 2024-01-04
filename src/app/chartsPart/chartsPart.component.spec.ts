/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { chartsPartComponent } from './chartsPart.component';

describe('ChartsPartComponent', () => {
  let component: chartsPartComponent;
  let fixture: ComponentFixture<chartsPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [chartsPartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chartsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagensDetailComponent } from './hospedagens-detail.component';

describe('HospedagensDetailComponent', () => {
  let component: HospedagensDetailComponent;
  let fixture: ComponentFixture<HospedagensDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedagensDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedagensDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagensFormComponent } from './hospedagens-form.component';

describe('HospedagensFormComponent', () => {
  let component: HospedagensFormComponent;
  let fixture: ComponentFixture<HospedagensFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedagensFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedagensFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

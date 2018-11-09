import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportesFormComponent } from './transportes-form.component';

describe('TransportesFormComponent', () => {
  let component: TransportesFormComponent;
  let fixture: ComponentFixture<TransportesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

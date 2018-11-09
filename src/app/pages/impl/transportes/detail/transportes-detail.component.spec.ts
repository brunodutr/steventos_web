import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportesDetailComponent } from './transportes-detail.component';

describe('TransportesDetailComponent', () => {
  let component: TransportesDetailComponent;
  let fixture: ComponentFixture<TransportesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

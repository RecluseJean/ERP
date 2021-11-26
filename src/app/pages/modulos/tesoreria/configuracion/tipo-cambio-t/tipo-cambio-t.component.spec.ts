import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCambioTComponent } from './tipo-cambio-t.component';

describe('TipoCambioTComponent', () => {
  let component: TipoCambioTComponent;
  let fixture: ComponentFixture<TipoCambioTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCambioTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCambioTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

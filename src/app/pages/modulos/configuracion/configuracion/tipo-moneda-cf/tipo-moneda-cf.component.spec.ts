import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMonedaCfComponent } from './tipo-moneda-cf.component';

describe('TipoMonedaCfComponent', () => {
  let component: TipoMonedaCfComponent;
  let fixture: ComponentFixture<TipoMonedaCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoMonedaCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMonedaCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

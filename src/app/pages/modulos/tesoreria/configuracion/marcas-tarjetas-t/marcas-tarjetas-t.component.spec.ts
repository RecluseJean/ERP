import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasTarjetasTComponent } from './marcas-tarjetas-t.component';

describe('MarcasTarjetasTComponent', () => {
  let component: MarcasTarjetasTComponent;
  let fixture: ComponentFixture<MarcasTarjetasTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcasTarjetasTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasTarjetasTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMarcasTarjetasComponent } from './c-marcas-tarjetas.component';

describe('CMarcasTarjetasComponent', () => {
  let component: CMarcasTarjetasComponent;
  let fixture: ComponentFixture<CMarcasTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMarcasTarjetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMarcasTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenCompraAprobarComponent } from './orden-compra-aprobar.component';

describe('OrdenCompraAprobarComponent', () => {
  let component: OrdenCompraAprobarComponent;
  let fixture: ComponentFixture<OrdenCompraAprobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenCompraAprobarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenCompraAprobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

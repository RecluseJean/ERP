import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTipoMovAlmacenComponent } from './c-tipo-mov-almacen.component';

describe('CTipoMovAlmacenComponent', () => {
  let component: CTipoMovAlmacenComponent;
  let fixture: ComponentFixture<CTipoMovAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTipoMovAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTipoMovAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

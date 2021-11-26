import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMovAlmacenCComponent } from './tipo-mov-almacen-c.component';

describe('TipoMovAlmacenCComponent', () => {
  let component: TipoMovAlmacenCComponent;
  let fixture: ComponentFixture<TipoMovAlmacenCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoMovAlmacenCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMovAlmacenCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

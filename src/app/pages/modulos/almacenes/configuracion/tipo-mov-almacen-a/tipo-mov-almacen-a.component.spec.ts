import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMovAlmacenAComponent } from './tipo-mov-almacen-a.component';

describe('TipoMovAlmacenAComponent', () => {
  let component: TipoMovAlmacenAComponent;
  let fixture: ComponentFixture<TipoMovAlmacenAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoMovAlmacenAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMovAlmacenAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

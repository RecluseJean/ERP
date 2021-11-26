import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCategoriaProductosComponent } from './c-categoria-productos.component';

describe('CCategoriaProductosComponent', () => {
  let component: CCategoriaProductosComponent;
  let fixture: ComponentFixture<CCategoriaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCategoriaProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCategoriaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

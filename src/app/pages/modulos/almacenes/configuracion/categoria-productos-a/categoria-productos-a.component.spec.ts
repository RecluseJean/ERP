import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaProductosAComponent } from './categoria-productos-a.component';

describe('CategoriaProductosAComponent', () => {
  let component: CategoriaProductosAComponent;
  let fixture: ComponentFixture<CategoriaProductosAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaProductosAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaProductosAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

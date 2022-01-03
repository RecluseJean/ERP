import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaProductosCComponent } from './categoria-productos-c.component';

describe('CategoriaProductosCComponent', () => {
  let component: CategoriaProductosCComponent;
  let fixture: ComponentFixture<CategoriaProductosCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaProductosCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaProductosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

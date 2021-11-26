import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAlmacenComponent } from './c-almacen.component';

describe('CAlmacenComponent', () => {
  let component: CAlmacenComponent;
  let fixture: ComponentFixture<CAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

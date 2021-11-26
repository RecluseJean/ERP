import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenAComponent } from './almacen-a.component';

describe('AlmacenAComponent', () => {
  let component: AlmacenAComponent;
  let fixture: ComponentFixture<AlmacenAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

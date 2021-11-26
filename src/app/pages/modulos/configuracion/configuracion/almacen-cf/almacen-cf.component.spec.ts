import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenCfComponent } from './almacen-cf.component';

describe('AlmacenCfComponent', () => {
  let component: AlmacenCfComponent;
  let fixture: ComponentFixture<AlmacenCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasTComponent } from './cajas-t.component';

describe('CajasTComponent', () => {
  let component: CajasTComponent;
  let fixture: ComponentFixture<CajasTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajasTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajasTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

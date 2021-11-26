import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelCuentaCnComponent } from './nivel-cuenta-cn.component';

describe('NivelCuentaCnComponent', () => {
  let component: NivelCuentaCnComponent;
  let fixture: ComponentFixture<NivelCuentaCnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelCuentaCnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelCuentaCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

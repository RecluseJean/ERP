import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisCuentaEquivalenteCnComponent } from './pais-cuenta-equivalente-cn.component';

describe('PaisCuentaEquivalenteCnComponent', () => {
  let component: PaisCuentaEquivalenteCnComponent;
  let fixture: ComponentFixture<PaisCuentaEquivalenteCnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisCuentaEquivalenteCnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisCuentaEquivalenteCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

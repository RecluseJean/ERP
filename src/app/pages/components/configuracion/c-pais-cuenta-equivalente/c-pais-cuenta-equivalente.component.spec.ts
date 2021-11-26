import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPaisCuentaEquivalenteComponent } from './c-pais-cuenta-equivalente.component';

describe('CPaisCuentaEquivalenteComponent', () => {
  let component: CPaisCuentaEquivalenteComponent;
  let fixture: ComponentFixture<CPaisCuentaEquivalenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPaisCuentaEquivalenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPaisCuentaEquivalenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

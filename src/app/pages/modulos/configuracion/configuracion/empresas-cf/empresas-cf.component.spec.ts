import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasCfComponent } from './empresas-cf.component';

describe('EmpresasCfComponent', () => {
  let component: EmpresasCfComponent;
  let fixture: ComponentFixture<EmpresasCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

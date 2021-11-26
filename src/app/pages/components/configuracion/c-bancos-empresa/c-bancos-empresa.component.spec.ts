import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBancosEmpresaComponent } from './c-bancos-empresa.component';

describe('CBancosEmpresaComponent', () => {
  let component: CBancosEmpresaComponent;
  let fixture: ComponentFixture<CBancosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBancosEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CBancosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

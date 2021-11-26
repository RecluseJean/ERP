import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancosEmpresaTComponent } from './bancos-empresa-t.component';

describe('BancosEmpresaTComponent', () => {
  let component: BancosEmpresaTComponent;
  let fixture: ComponentFixture<BancosEmpresaTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancosEmpresaTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancosEmpresaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

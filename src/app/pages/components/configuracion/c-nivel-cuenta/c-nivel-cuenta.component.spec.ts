import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNivelCuentaComponent } from './c-nivel-cuenta.component';

describe('CNivelCuentaComponent', () => {
  let component: CNivelCuentaComponent;
  let fixture: ComponentFixture<CNivelCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNivelCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CNivelCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCfComponent } from './proyectos-cf.component';

describe('ProyectosCfComponent', () => {
  let component: ProyectosCfComponent;
  let fixture: ComponentFixture<ProyectosCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

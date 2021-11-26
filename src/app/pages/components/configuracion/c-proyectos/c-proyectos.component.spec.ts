import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProyectosComponent } from './c-proyectos.component';

describe('CProyectosComponent', () => {
  let component: CProyectosComponent;
  let fixture: ComponentFixture<CProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

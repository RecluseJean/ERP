import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUsuariosComponent } from './c-usuarios.component';

describe('CUsuariosComponent', () => {
  let component: CUsuariosComponent;
  let fixture: ComponentFixture<CUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosCfComponent } from './usuarios-cf.component';

describe('UsuariosCfComponent', () => {
  let component: UsuariosCfComponent;
  let fixture: ComponentFixture<UsuariosCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

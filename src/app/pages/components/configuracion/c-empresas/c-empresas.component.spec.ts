import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEmpresasComponent } from './c-empresas.component';

describe('CEmpresasComponent', () => {
  let component: CEmpresasComponent;
  let fixture: ComponentFixture<CEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTipoOperacionComponent } from './c-tipo-operacion.component';

describe('CTipoOperacionComponent', () => {
  let component: CTipoOperacionComponent;
  let fixture: ComponentFixture<CTipoOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTipoOperacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTipoOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

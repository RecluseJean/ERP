import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaEntradaComponent } from './guia-entrada.component';

describe('GuiaEntradaComponent', () => {
  let component: GuiaEntradaComponent;
  let fixture: ComponentFixture<GuiaEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

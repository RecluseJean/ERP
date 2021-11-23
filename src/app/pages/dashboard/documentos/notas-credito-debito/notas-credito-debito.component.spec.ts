import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasCreditoDebitoComponent } from './notas-credito-debito.component';

describe('NotasCreditoDebitoComponent', () => {
  let component: NotasCreditoDebitoComponent;
  let fixture: ComponentFixture<NotasCreditoDebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasCreditoDebitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasCreditoDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

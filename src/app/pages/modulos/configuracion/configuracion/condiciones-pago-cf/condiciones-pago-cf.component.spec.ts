import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesPagoCfComponent } from './condiciones-pago-cf.component';

describe('CondicionesPagoCfComponent', () => {
  let component: CondicionesPagoCfComponent;
  let fixture: ComponentFixture<CondicionesPagoCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionesPagoCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesPagoCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

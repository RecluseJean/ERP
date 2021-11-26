import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigosAduanaCComponent } from './codigos-aduana-c.component';

describe('CodigosAduanaCComponent', () => {
  let component: CodigosAduanaCComponent;
  let fixture: ComponentFixture<CodigosAduanaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigosAduanaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigosAduanaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

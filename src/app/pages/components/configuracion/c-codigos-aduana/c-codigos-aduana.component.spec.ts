import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCodigosAduanaComponent } from './c-codigos-aduana.component';

describe('CCodigosAduanaComponent', () => {
  let component: CCodigosAduanaComponent;
  let fixture: ComponentFixture<CCodigosAduanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCodigosAduanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCodigosAduanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

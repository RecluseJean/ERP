import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoAduanaComponent } from './codigo-aduana.component';

describe('CodigoAduanaComponent', () => {
  let component: CodigoAduanaComponent;
  let fixture: ComponentFixture<CodigoAduanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoAduanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoAduanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

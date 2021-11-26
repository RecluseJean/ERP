import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosCfComponent } from './parametros-cf.component';

describe('ParametrosCfComponent', () => {
  let component: ParametrosCfComponent;
  let fixture: ComponentFixture<ParametrosCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

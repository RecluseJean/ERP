import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroContableCnComponent } from './rubro-contable-cn.component';

describe('RubroContableCnComponent', () => {
  let component: RubroContableCnComponent;
  let fixture: ComponentFixture<RubroContableCnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubroContableCnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroContableCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

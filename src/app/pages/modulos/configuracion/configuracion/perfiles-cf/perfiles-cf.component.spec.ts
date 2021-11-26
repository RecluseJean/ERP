import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesCfComponent } from './perfiles-cf.component';

describe('PerfilesCfComponent', () => {
  let component: PerfilesCfComponent;
  let fixture: ComponentFixture<PerfilesCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilesCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBancosComponent } from './c-bancos.component';

describe('CBancosComponent', () => {
  let component: CBancosComponent;
  let fixture: ComponentFixture<CBancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBancosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CBancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPerfilesComponent } from './c-perfiles.component';

describe('CPerfilesComponent', () => {
  let component: CPerfilesComponent;
  let fixture: ComponentFixture<CPerfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPerfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

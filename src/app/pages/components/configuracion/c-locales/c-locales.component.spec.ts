import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLocalesComponent } from './c-locales.component';

describe('CLocalesComponent', () => {
  let component: CLocalesComponent;
  let fixture: ComponentFixture<CLocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLocalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

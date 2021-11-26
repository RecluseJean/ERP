import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalesCfComponent } from './locales-cf.component';

describe('LocalesCfComponent', () => {
  let component: LocalesCfComponent;
  let fixture: ComponentFixture<LocalesCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalesCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalesCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

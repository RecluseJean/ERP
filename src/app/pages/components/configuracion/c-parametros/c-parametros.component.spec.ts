import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CParametrosComponent } from './c-parametros.component';

describe('CParametrosComponent', () => {
  let component: CParametrosComponent;
  let fixture: ComponentFixture<CParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CParametrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

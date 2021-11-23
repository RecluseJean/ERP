import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposHonorariosComponent } from './tipos-honorarios.component';

describe('TiposHonorariosComponent', () => {
  let component: TiposHonorariosComponent;
  let fixture: ComponentFixture<TiposHonorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposHonorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposHonorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

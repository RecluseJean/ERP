import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasAComponent } from './marcas-a.component';

describe('MarcasAComponent', () => {
  let component: MarcasAComponent;
  let fixture: ComponentFixture<MarcasAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcasAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasCComponent } from './marcas-c.component';

describe('MarcasCComponent', () => {
  let component: MarcasCComponent;
  let fixture: ComponentFixture<MarcasCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcasCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

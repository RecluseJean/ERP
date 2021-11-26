import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesMedidasCComponent } from './unidades-medidas-c.component';

describe('UnidadesMedidasCComponent', () => {
  let component: UnidadesMedidasCComponent;
  let fixture: ComponentFixture<UnidadesMedidasCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesMedidasCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesMedidasCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

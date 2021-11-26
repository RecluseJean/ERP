import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivosTrasladoCComponent } from './motivos-traslado-c.component';

describe('MotivosTrasladoCComponent', () => {
  let component: MotivosTrasladoCComponent;
  let fixture: ComponentFixture<MotivosTrasladoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivosTrasladoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivosTrasladoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

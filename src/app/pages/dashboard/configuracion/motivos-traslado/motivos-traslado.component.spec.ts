import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivosTrasladoComponent } from './motivos-traslado.component';

describe('MotivosTrasladoComponent', () => {
  let component: MotivosTrasladoComponent;
  let fixture: ComponentFixture<MotivosTrasladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivosTrasladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivosTrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

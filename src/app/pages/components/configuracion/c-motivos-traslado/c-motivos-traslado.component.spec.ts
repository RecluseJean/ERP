import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMotivosTrasladoComponent } from './c-motivos-traslado.component';

describe('CMotivosTrasladoComponent', () => {
  let component: CMotivosTrasladoComponent;
  let fixture: ComponentFixture<CMotivosTrasladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMotivosTrasladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMotivosTrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

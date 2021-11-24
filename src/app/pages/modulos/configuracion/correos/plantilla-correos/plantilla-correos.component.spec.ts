import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaCorreosComponent } from './plantilla-correos.component';

describe('PlantillaCorreosComponent', () => {
  let component: PlantillaCorreosComponent;
  let fixture: ComponentFixture<PlantillaCorreosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaCorreosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaCorreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

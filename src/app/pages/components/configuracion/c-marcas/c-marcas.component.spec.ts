import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMarcasComponent } from './c-marcas.component';

describe('CMarcasComponent', () => {
  let component: CMarcasComponent;
  let fixture: ComponentFixture<CMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

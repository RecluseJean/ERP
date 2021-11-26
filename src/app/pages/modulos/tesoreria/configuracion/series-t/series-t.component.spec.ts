import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTComponent } from './series-t.component';

describe('SeriesTComponent', () => {
  let component: SeriesTComponent;
  let fixture: ComponentFixture<SeriesTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

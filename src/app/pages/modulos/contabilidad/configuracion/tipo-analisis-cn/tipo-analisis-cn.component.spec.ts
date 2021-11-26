import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAnalisisCnComponent } from './tipo-analisis-cn.component';

describe('TipoAnalisisCnComponent', () => {
  let component: TipoAnalisisCnComponent;
  let fixture: ComponentFixture<TipoAnalisisCnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoAnalisisCnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAnalisisCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

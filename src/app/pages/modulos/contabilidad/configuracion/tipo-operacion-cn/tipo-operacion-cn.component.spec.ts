import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOperacionCnComponent } from './tipo-operacion-cn.component';

describe('TipoOperacionCnComponent', () => {
  let component: TipoOperacionCnComponent;
  let fixture: ComponentFixture<TipoOperacionCnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoOperacionCnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOperacionCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

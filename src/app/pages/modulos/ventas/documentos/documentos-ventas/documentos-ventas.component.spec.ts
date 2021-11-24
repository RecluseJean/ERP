import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosVentasComponent } from './documentos-ventas.component';

describe('DocumentosVentasComponent', () => {
  let component: DocumentosVentasComponent;
  let fixture: ComponentFixture<DocumentosVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

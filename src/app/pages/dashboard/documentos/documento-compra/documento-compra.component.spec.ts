import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoCompraComponent } from './documento-compra.component';

describe('DocumentoCompraComponent', () => {
  let component: DocumentoCompraComponent;
  let fixture: ComponentFixture<DocumentoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentoCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

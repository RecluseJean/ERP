import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancosCfComponent } from './bancos-cf.component';

describe('BancosCfComponent', () => {
  let component: BancosCfComponent;
  let fixture: ComponentFixture<BancosCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancosCfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancosCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

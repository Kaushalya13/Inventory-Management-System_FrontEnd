import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSupplierComponent } from './save-supplier.component';

describe('SaveSupplierComponent', () => {
  let component: SaveSupplierComponent;
  let fixture: ComponentFixture<SaveSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveSupplierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

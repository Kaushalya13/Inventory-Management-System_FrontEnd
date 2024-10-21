import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBatchComponent } from './save-batch.component';

describe('SaveBatchComponent', () => {
  let component: SaveBatchComponent;
  let fixture: ComponentFixture<SaveBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveBatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

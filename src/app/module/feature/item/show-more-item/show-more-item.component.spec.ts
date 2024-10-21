import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoreItemComponent } from './show-more-item.component';

describe('ShowMoreItemComponent', () => {
  let component: ShowMoreItemComponent;
  let fixture: ComponentFixture<ShowMoreItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowMoreItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowMoreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

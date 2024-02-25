import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterCardComponent } from './letter-card.component';

describe('LetterCardComponent', () => {
  let component: LetterCardComponent;
  let fixture: ComponentFixture<LetterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterCardComponent]
    });
    fixture = TestBed.createComponent(LetterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

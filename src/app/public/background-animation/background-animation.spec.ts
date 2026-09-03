import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundAnimation } from './background-animation';

describe('BackgroundAnimation', () => {
  let component: BackgroundAnimation;
  let fixture: ComponentFixture<BackgroundAnimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundAnimation],
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundAnimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

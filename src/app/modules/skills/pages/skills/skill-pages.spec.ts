import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPages } from './skill-pages';

describe('SkillPages', () => {
  let component: SkillPages;
  let fixture: ComponentFixture<SkillPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillPages],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

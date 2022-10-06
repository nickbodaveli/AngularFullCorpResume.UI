import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifyWorkingExperienceComponent } from './specify-working-experience.component';

describe('SpecifyWorkingExperienceComponent', () => {
  let component: SpecifyWorkingExperienceComponent;
  let fixture: ComponentFixture<SpecifyWorkingExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifyWorkingExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecifyWorkingExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

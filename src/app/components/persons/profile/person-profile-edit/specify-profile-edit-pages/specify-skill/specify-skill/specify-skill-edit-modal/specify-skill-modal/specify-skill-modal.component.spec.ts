import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifySkillModalComponent } from './specify-skill-modal.component';

describe('SpecifySkillModalComponent', () => {
  let component: SpecifySkillModalComponent;
  let fixture: ComponentFixture<SpecifySkillModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifySkillModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecifySkillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

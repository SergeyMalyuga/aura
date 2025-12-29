import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRequirementComponent } from './top-requirement.component';

describe('TopRequirementComponent', () => {
  let component: TopRequirementComponent;
  let fixture: ComponentFixture<TopRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRequirementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

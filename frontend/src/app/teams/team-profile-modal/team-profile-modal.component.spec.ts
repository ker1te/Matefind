import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProfileModalComponent } from './team-profile-modal.component';

describe('TeamProfileModalComponent', () => {
  let component: TeamProfileModalComponent;
  let fixture: ComponentFixture<TeamProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamProfileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

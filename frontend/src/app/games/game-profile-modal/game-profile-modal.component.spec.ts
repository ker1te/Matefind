import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProfileModalComponent } from './game-profile-modal.component';

describe('GameProfileModalComponent', () => {
  let component: GameProfileModalComponent;
  let fixture: ComponentFixture<GameProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameProfileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

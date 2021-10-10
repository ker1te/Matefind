import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfTileComponent } from './mf-tile.component';

describe('MfTileComponent', () => {
  let component: MfTileComponent;
  let fixture: ComponentFixture<MfTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

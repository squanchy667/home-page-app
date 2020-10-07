import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleMenuComponent } from './little-menu.component';

describe('LittleMenuComponent', () => {
  let component: LittleMenuComponent;
  let fixture: ComponentFixture<LittleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

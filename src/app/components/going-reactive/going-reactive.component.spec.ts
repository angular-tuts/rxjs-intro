import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingReactiveComponent } from './going-reactive.component';

describe('GoingReactiveComponent', () => {
  let component: GoingReactiveComponent;
  let fixture: ComponentFixture<GoingReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoingReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoingReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

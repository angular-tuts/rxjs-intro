import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynPipeExampleComponent } from './async-pipe-example.component';

describe('AsynPipeExampleComponent', () => {
  let component: AsynPipeExampleComponent;
  let fixture: ComponentFixture<AsynPipeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynPipeExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynPipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducingCompComponent } from './introducing-comp.component';

describe('IntroducingCompComponent', () => {
  let component: IntroducingCompComponent;
  let fixture: ComponentFixture<IntroducingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

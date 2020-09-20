import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTabTwoComponent } from './test-tab-two.component';

describe('TestTabTwoComponent', () => {
  let component: TestTabTwoComponent;
  let fixture: ComponentFixture<TestTabTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTabTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

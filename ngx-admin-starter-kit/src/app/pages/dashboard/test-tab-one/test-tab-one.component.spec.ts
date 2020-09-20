import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTabOneComponent } from './test-tab-one.component';

describe('TestTabOneComponent', () => {
  let component: TestTabOneComponent;
  let fixture: ComponentFixture<TestTabOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTabOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

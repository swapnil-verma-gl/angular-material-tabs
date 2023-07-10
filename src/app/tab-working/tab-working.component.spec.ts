import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabWorkingComponent } from './tab-working.component';

describe('TabWorkingComponent', () => {
  let component: TabWorkingComponent;
  let fixture: ComponentFixture<TabWorkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabWorkingComponent]
    });
    fixture = TestBed.createComponent(TabWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

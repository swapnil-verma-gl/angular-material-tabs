import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIssueComponent } from './tab-issue.component';

describe('TabIssueComponent', () => {
  let component: TabIssueComponent;
  let fixture: ComponentFixture<TabIssueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabIssueComponent]
    });
    fixture = TestBed.createComponent(TabIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

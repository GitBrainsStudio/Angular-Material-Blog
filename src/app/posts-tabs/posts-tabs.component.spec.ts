import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTabsComponent } from './posts-tabs.component';

describe('PostsTabsComponent', () => {
  let component: PostsTabsComponent;
  let fixture: ComponentFixture<PostsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

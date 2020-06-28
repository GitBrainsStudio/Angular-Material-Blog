import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditorPageComponent } from './post-editor-page.component';

describe('PostEditorPageComponent', () => {
  let component: PostEditorPageComponent;
  let fixture: ComponentFixture<PostEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

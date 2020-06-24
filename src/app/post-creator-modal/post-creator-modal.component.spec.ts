import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreatorModalComponent } from './post-creator-modal.component';

describe('PostCreatorModalComponent', () => {
  let component: PostCreatorModalComponent;
  let fixture: ComponentFixture<PostCreatorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCreatorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

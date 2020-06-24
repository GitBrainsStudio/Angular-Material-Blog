import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreatorModalComponent } from './category-creator-modal.component';

describe('CategoryCreatorModalComponent', () => {
  let component: CategoryCreatorModalComponent;
  let fixture: ComponentFixture<CategoryCreatorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCreatorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCreatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

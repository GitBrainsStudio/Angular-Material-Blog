import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagerModalComponent } from './category-manager-modal.component';

describe('CategoryManagerModalComponent', () => {
  let component: CategoryManagerModalComponent;
  let fixture: ComponentFixture<CategoryManagerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryManagerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryManagerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

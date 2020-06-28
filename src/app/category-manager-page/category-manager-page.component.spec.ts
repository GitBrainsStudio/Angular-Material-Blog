import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagerPageComponent } from './category-manager-page.component';

describe('CategoryManagerPageComponent', () => {
  let component: CategoryManagerPageComponent;
  let fixture: ComponentFixture<CategoryManagerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryManagerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

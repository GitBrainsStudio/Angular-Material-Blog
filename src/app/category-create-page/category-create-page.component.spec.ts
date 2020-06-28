import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreatePageComponent } from './category-create-page.component';

describe('CategoryCreatePageComponent', () => {
  let component: CategoryCreatePageComponent;
  let fixture: ComponentFixture<CategoryCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

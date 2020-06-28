import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditePageComponent } from './category-edite-page.component';

describe('CategoryEditePageComponent', () => {
  let component: CategoryEditePageComponent;
  let fixture: ComponentFixture<CategoryEditePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesChipsComponent } from './categories-chips.component';

describe('CategoriesChipsComponent', () => {
  let component: CategoriesChipsComponent;
  let fixture: ComponentFixture<CategoriesChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

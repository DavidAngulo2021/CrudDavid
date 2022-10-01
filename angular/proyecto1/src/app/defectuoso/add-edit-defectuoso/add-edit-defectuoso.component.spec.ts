import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDefectuosoComponent } from './add-edit-defectuoso.component';

describe('AddEditDefectuosoComponent', () => {
  let component: AddEditDefectuosoComponent;
  let fixture: ComponentFixture<AddEditDefectuosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDefectuosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDefectuosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

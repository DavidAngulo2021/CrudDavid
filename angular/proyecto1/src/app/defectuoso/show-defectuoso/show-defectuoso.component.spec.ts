import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDefectuosoComponent } from './show-defectuoso.component';

describe('ShowDefectuosoComponent', () => {
  let component: ShowDefectuosoComponent;
  let fixture: ComponentFixture<ShowDefectuosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDefectuosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDefectuosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

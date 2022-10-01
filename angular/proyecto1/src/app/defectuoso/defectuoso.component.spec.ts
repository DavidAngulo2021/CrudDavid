import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectuosoComponent } from './defectuoso.component';

describe('DefectuosoComponent', () => {
  let component: DefectuosoComponent;
  let fixture: ComponentFixture<DefectuosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectuosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectuosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

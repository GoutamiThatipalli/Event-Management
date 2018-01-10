import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditByIdComponent } from './edit-by-id.component';

describe('EditByIdComponent', () => {
  let component: EditByIdComponent;
  let fixture: ComponentFixture<EditByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

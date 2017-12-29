import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingComponent } from './upcomming.component';

describe('UpcommingComponent', () => {
  let component: UpcommingComponent;
  let fixture: ComponentFixture<UpcommingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcommingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

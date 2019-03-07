import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRxUtilsComponent } from './ngx-rx-utils.component';

describe('NgxRxUtilsComponent', () => {
  let component: NgxRxUtilsComponent;
  let fixture: ComponentFixture<NgxRxUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRxUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRxUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

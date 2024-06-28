import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyView3Component } from './my-view3.component';

describe('MyView3Component', () => {
  let component: MyView3Component;
  let fixture: ComponentFixture<MyView3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyView3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

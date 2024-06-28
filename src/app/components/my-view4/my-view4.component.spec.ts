import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyView4Component } from './my-view4.component';

describe('MyView4Component', () => {
  let component: MyView4Component;
  let fixture: ComponentFixture<MyView4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyView4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyView4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

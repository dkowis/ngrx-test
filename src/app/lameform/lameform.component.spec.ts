import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LameformComponent } from './lameform.component';

describe('LameformComponent', () => {
  let component: LameformComponent;
  let fixture: ComponentFixture<LameformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LameformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LameformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

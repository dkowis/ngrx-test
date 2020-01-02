import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoformComponent } from './infoform.component';

describe('InfoformComponent', () => {
  let component: InfoformComponent;
  let fixture: ComponentFixture<InfoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

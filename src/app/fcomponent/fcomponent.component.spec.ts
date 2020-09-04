import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcomponentComponent } from './fcomponent.component';

describe('FcomponentComponent', () => {
  let component: FcomponentComponent;
  let fixture: ComponentFixture<FcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

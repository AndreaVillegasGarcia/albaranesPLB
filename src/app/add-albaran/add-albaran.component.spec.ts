import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlbaranComponent } from './add-albaran.component';

describe('AddAlbaranComponent', () => {
  let component: AddAlbaranComponent;
  let fixture: ComponentFixture<AddAlbaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlbaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlbaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

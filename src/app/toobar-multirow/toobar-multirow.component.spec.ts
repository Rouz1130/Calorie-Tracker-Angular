import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToobarMultirowComponent } from './toobar-multirow.component';

describe('ToobarMultirowComponent', () => {
  let component: ToobarMultirowComponent;
  let fixture: ComponentFixture<ToobarMultirowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToobarMultirowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToobarMultirowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

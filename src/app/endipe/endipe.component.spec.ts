import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndipeComponent } from './endipe.component';

describe('EndipeComponent', () => {
  let component: EndipeComponent;
  let fixture: ComponentFixture<EndipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashingBoxComponent } from './flashing-box.component';

describe('FlashingBoxComponent', () => {
  let component: FlashingBoxComponent;
  let fixture: ComponentFixture<FlashingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

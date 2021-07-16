import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDragonControllerComponent } from './new-dragon-controller.component';

describe('NewDragonControllerComponent', () => {
  let component: NewDragonControllerComponent;
  let fixture: ComponentFixture<NewDragonControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDragonControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDragonControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDragonControllerComponent } from './edit-dragon-controller.component';

describe('EditDragonControllerComponent', () => {
  let component: EditDragonControllerComponent;
  let fixture: ComponentFixture<EditDragonControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDragonControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDragonControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

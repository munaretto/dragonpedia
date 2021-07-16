import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDragonPresenterComponent } from './modify-dragon-presenter.component';

describe('ModifyDragonPresenterComponent', () => {
  let component: ModifyDragonPresenterComponent;
  let fixture: ComponentFixture<ModifyDragonPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDragonPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDragonPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

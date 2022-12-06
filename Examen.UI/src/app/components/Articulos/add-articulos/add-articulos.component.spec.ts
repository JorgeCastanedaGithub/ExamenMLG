import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticulosComponent } from './add-articulos.component';

describe('AddArticulosComponent', () => {
  let component: AddArticulosComponent;
  let fixture: ComponentFixture<AddArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2cmpComponent } from './lib2cmp.component';

describe('Lib2cmpComponent', () => {
  let component: Lib2cmpComponent;
  let fixture: ComponentFixture<Lib2cmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2cmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2cmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

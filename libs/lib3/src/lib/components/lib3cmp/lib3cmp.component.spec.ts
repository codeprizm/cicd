import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3cmpComponent } from './lib3cmp.component';

describe('Lib3cmpComponent', () => {
  let component: Lib3cmpComponent;
  let fixture: ComponentFixture<Lib3cmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3cmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3cmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

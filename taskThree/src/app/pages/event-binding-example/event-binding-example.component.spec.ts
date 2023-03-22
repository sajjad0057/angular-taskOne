import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingExampleComponent } from './event-binding-example.component';

describe('EventBindingExampleComponent', () => {
  let component: EventBindingExampleComponent;
  let fixture: ComponentFixture<EventBindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

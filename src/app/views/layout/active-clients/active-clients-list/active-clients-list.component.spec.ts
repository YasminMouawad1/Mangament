import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveClientsListComponent } from './active-clients-list.component';

describe('ActiveClientsListComponent', () => {
  let component: ActiveClientsListComponent;
  let fixture: ComponentFixture<ActiveClientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveClientsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveClientsItemComponent } from './active-clients-item.component';

describe('ActiveClientsItemComponent', () => {
  let component: ActiveClientsItemComponent;
  let fixture: ComponentFixture<ActiveClientsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveClientsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveClientsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

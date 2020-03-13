import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthoriseComponent } from './user-authorise.component';

describe('UserAuthoriseComponent', () => {
  let component: UserAuthoriseComponent;
  let fixture: ComponentFixture<UserAuthoriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuthoriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
